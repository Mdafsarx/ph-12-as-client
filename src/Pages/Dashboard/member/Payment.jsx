import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Form from "./Form";
import { useParams } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE);




const Payment = () => {
    const {month}=useParams()

    return (
        <div>
            <div>
                <Elements stripe={stripePromise}>
                    <Form date={month}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;