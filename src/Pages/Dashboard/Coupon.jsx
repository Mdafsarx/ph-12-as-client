import { useQuery } from "@tanstack/react-query";
import CommonUrl from "../../Hooks/CommonUrl";
import toast from "react-hot-toast";

const Coupon = () => {
    const axiosUrl = CommonUrl()

    const { data = [] ,refetch} = useQuery({
        queryKey: ['coupon'],
        queryFn: async () => {
            const data = await axiosUrl('/coupon');
            return data.data
        }
    })
    console.log(data)


    const handleSubmit=(e)=>{
        e.preventDefault();
        const coupon=e.target.coupon.value;
        const discount=e.target.discount.value;
        const description=e.target.description.value;
        axiosUrl.post('/coupon',{coupon_code:coupon,discount_percentage:discount,coupon_description:description})
        .then(data=>{
            if(data.data.insertedId){
                toast.success('Coupon added successful');
                e.target.reset();
                refetch()
            }
        })
        .catch(error=>toast.error(error.message))
       
    }

    return (
        <div className="px-5 py-4">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Coupon code</th>
                            <th>Discount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((c, i) => <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{c?.coupon_code}</td>
                            <td>{c?.discount_percentage}%</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
            <div className="flex justify-end">
                <button className="btn btn-sm bg-[#E49BFF] text-white mt-8 m-2" onClick={() => document.getElementById('my_modal_5').showModal()}>Add coupon</button>
            </div>





            {/* modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <div>
                        <div className="flex items-center justify-center text-center">
                            <form onSubmit={handleSubmit}  className="flex flex-col w-full max-w-lg p-12 space-y-1">
                                <label className="self-start text-xs font-semibold">Coupon code</label>
                                <input name="coupon" className="flex items-center h-12 px-4 mt-2 rounded border border-black  focus:outline-none" placeholder="Coupon code" required/>
                                <label className="self-start text-xs font-semibold">Discount</label>
                                <input name="discount" className="flex items-center h-12 px-4 mt-2 rounded border border-black  focus:outline-none" placeholder="Discount" required/>
                                <label className="self-start text-xs font-semibold">Description</label>
                                <input name="description"  className="flex items-center h-12 px-4 mt-2 rounded border border-black  focus:outline-none" placeholder="Description" required/>
                               <button className="btn bg-[#7EA1FF]">Submit</button>
                            </form>
                        </div>
                    </div>


                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Coupon;