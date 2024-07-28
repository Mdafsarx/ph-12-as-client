import { useQuery } from "@tanstack/react-query";
import CommonUrl from "../../../Hooks/CommonUrl";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import Empty from "../Empty/Empty";

const PaymentHistory = () => {
    const axiosUrl = CommonUrl();
    const { user } = useAuth();
    const [history, setHistory] = useState([])
    useQuery({
        queryKey: ['payment-history', user?.email],
        queryFn: async () => {
            const res = await axiosUrl(`/payment/${user?.email}`)
            return setHistory(res.data);
        }
    })
    console.log(history)


    const handleSearch = (e) => {
        e.preventDefault();
        const text = e.target.Search.value;
        axiosUrl(`/findPayment?search=${text}&email=${user?.email}`)
            .then(data => {
                setHistory(data.data)
            })
        e.target.reset()
    }


    return (
        <div className="px-20 md:px-10 pt-5">

            <form onSubmit={handleSearch} className="py-5 text-black">
                <fieldset className="space-y-1 mx-auto">
                    <label htmlFor="Search" className="hidden">Search</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" title="search" className="p-1 focus:outline-none focus:ring" >
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 ">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                </svg>
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search month number...." className="w-36 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none " />
                    </div>
                </fieldset>
            </form>


            <div>
                {
                    history.length === 0
                        ?
                        <Empty text={"You haven't paid anything"} btnText={'Payment'} link={'/dashboard/make-Payment'}/>
                        :
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th  ></th>
                                        <th className="text-[#E49BFF]">Name</th>
                                        <th className="text-[#E49BFF] hidden md:flex">Email</th>
                                        <th className="text-[#E49BFF]">Price$</th>
                                        <th className="text-[#E49BFF]">Month</th>
                                        <th className="text-[#E49BFF] hidden md:flex">Payment date</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {history?.map((Data, i) => <tr key={i}>
                                        <th >{i + 1}</th>
                                        <td>{Data.name}</td>
                                        <td  className="hidden md:flex">{Data.email}</td>
                                        <td>{Data.price}</td>
                                        <td>{Data.month}</td>
                                        <td  className="hidden md:flex">{Data.paymentDate}/{Data?.paymentMonth}/{Data?.paymentYear}</td>
                                    </tr>)}

                                </tbody>
                            </table>
                        </div>
                }

            </div>
        </div>
    );
};

export default PaymentHistory;