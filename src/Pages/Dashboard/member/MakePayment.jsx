/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import CommonUrl from "../../../Hooks/CommonUrl";
import useAuth from "../../../Hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
import Empty from "../Empty/Empty";

const MakePayment = () => {
    const axiosUrl = CommonUrl();
    const { user } = useAuth()

    const { data = [] } = useQuery({
        queryKey: ['agreement', user?.email],
        queryFn: async () => {
            const res = await axiosUrl(`/agreement/${user?.email}`)
            return res.data;
        }
    })
    console.log(data)
    const { email, floorNo, blockName, apartmentNo, rent, image, mount1 ,mount} = data || {};
    const nav = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const month = e.target.month.value;
        nav(`/dashboard/Payment/${month}`)
    }




    return (
        <div className="p-2 mt-10 md:my-28">

            {
                data.length === 0
                    ?
                    <div className="mx-10">
                       <Empty text={'There is nothing to pay$'} btnText={'Apartment'} link={'/apartment'}/>
                    </div>
                    :
                    <section className="text-gray-50 px-6 md:px-40 lg:px-0">
                        <form className=" flex flex-col mx-auto  space-y-12 lg:w-[800px]" onSubmit={handleSubmit} data-aos="zoom-in" data-aos-duration="1000" >

                            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-2xl shadow-sm bg-gray-900 ">

                                <div className="space-y-2 col-span-full hidden md:flex lg:col-span-1">
                                    <img src={image} className="rounded-md hidden lg:flex" />
                                </div>


                                <div className="grid grid-cols-4 gap-4 col-span-full lg:col-span-3">

                                    <div className="col-span-full sm:col-span-2">
                                        <label className="text-sm uppercase">Email</label>
                                        <input className="w-full rounded-md text-black pl-1 " value={email} required />
                                    </div>

                                    <div className="col-span-full sm:col-span-2">
                                        <label className="text-sm uppercase">Floor no</label>
                                        <input className="w-full rounded-md text-black pl-1 " value={floorNo} required />
                                    </div>

                                    <div className="col-span-full sm:col-span-2">
                                        <label className="text-sm uppercase">Block name</label>
                                        <input className="w-full rounded-md text-black pl-1 " value={blockName} required />
                                    </div>

                                    <div className="col-span-full sm:col-span-2">
                                        <label className="text-sm uppercase">Room no</label>
                                        <input className="w-full rounded-md text-black pl-1 " value={apartmentNo} required />
                                    </div>

                                    <div className="col-span-full sm:col-span-2">
                                        <label className="text-sm uppercase">Rent</label>
                                        <input className="w-full rounded-md text-black pl-1 " value={rent + '$'} required />
                                    </div>

                                    <div className="col-span-full sm:col-span-2">
                                        <label className="text-sm uppercase ">Which  month’s rent you want to pay</label>
                                        <input id="month" type="number" min={mount1||mount} max={12} placeholder="Enter the month number" className="w-full rounded-md text-black pl-1 " required />
                                    </div>




                                    <div className=" col-span-full">
                                        <button className="btn btn-block bg-[#7EA1FF] hover:bg-[#E49BFF] hover:text-black text-white border-0">
                                            Pay$
                                        </button>
                                    </div>
                                </div>


                            </fieldset>

                        </form>
                    </section>
            }


        </div>
    );
};

export default MakePayment;