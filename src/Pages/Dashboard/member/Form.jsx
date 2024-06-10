/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import CommonUrl from "../../../Hooks/CommonUrl";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { RiCoupon2Line } from "react-icons/ri";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Form = ({ date: month }) => {
    const date = new Date()
    const paymentMonth = date.getMonth() + 1;
    const paymentDate = date.getDate();
    const paymentYear = date.getFullYear();
    const { user } = useAuth();
    const navLink = useNavigate()
    const [ERROR, SetERROR] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const { data = [], refetch } = useQuery({
        queryKey: ['agreement', user?.email],
        queryFn: async () => {
            const res = await axiosUrl(`/agreement/${user?.email}`)
            return res.data;
        }
    })

    // coupons 
    const { data: Data = [], refetch: reload } = useQuery({
        queryKey: ['coupon', user?.email],
        queryFn: async () => {
            const res = await axiosUrl(`/coupon`,{headers:{authorization:localStorage.getItem('token')}})
            return res.data;
        }
    })





    const [totalPrice, setTotalPrice] = useState(data.rent)
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosUrl = CommonUrl();
    async function handleSubmit(e) {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            SetERROR(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            SetERROR('')
        }


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || '',
                        email: user?.email || '',
                    },
                },
            },
        );
        if (paymentIntent) {
            console.log('paymentIntent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);
                // payment date save in data base
                const payment = {
                    name: user?.displayName,
                    email: user?.email,
                    month,
                    paymentMonth,
                    paymentYear, paymentDate,
                    transId: transactionId,
                    price: totalPrice,
                }
                axiosUrl.post('/payment', payment)
                    .then(data => {
                        if (data.data.insertedId) {
                            // axiosUrl.delete(`/agreement/${user?.email}`)
                            // .then(data=>{
                            // if(data.data.deletedCount){
                            // } })
                            toast.success('Payment successful');
                            refetch()
                            navLink('/dashboard/payment-History');
                        }
                    })
            }
        }
        else {
            console.log('confirmError', confirmError)
        }

    }

    useEffect(() => {

        if (data?.rent > 0) {
            axiosUrl.post('/create-payment-intent', { price: totalPrice })
                .then(data => {
                    setClientSecret(data.data.clientSecret)
                })
        }
    }, [totalPrice])





    // coupon function here
    const handleSubmit2 = (e) => {
        e.preventDefault();
        // todo:start here 
        const coupon = e.target.coupon.value;
        Data.forEach(coupons => {
            if (coupon === coupons.coupon_code) {
                const price = data?.rent - (data?.rent * parseInt(coupons.discount_percentage) / 100);
                setTotalPrice(price)
                e.target.reset()
                toast.success('Coupon apply successful')
            }
        });
    }


    return (
        <div className="max-w-6xl mx-auto p-14 md:p-20">

            <form onSubmit={handleSubmit2} className="flex items-center justify-between pb-5 pr-2">
                <div className="flex items-center">
                    <RiCoupon2Line className="text-[22px]" />
                    <input type="text" name="coupon" placeholder="Coupon code" className=" ml-1.5 pl-0.5 outline-none" required />
                </div>
                <button className="btn btn-sm bg-[#E49BFF] text-white ">Apply</button>
            </form>

            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="flex justify-between px-2 py-4">
                    {!transactionId && <p className="text-red-600">{ERROR}</p>}
                    {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
                    <div className="flex flex-col items-end">
                        <p className="p-1">Total: <span>{totalPrice}</span></p>
                        <button className="btn btn-sm bg-[#E49BFF] text-white" type="submit" disabled={!stripe || !clientSecret}>
                            Pay$
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Form;