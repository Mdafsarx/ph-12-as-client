import { useQuery } from "@tanstack/react-query";
import CommonUrl from "../../Hooks/CommonUrl";
import { BiAlarm, BiBed } from "react-icons/bi";
import { CgCoffee } from "react-icons/cg";
import { FaCar, FaSwimmer } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { TiWiFi } from "react-icons/ti";
import toast from "react-hot-toast";

const AgreementRequest = () => {
    const axiosUrl = CommonUrl()

    const { data: agreementData = [] ,refetch} = useQuery({
        queryKey: ['agreement'],
        queryFn: async () => {
            const res = await axiosUrl('/agreementAdmin')
            return res.data
        }
    })

    const handleAccept=(email,id)=>{
       axiosUrl.put(`/agreement?email=${email}`,{status:'checked'})
       .then(data=>{
          if(data.data.modifiedCount){
            axiosUrl.put(`/user?email=${email}`,{Role:'member'})
            .then(data=>{
                if(data.data.modifiedCount){
                    axiosUrl.delete(`/agreementAdmin?id=${id}`)
                    .then(data=>{
                        if(data.data.deletedCount){
                            toast.success('Accepted done')
                            refetch()
                        }
                    }).catch(error=>toast.error(error.message))
                }
            }).catch(error=>toast.error(error.message))
          }
       })
       .catch(error=>toast.error(error.message))

    }


    const handleReject=(email,id)=>{
        axiosUrl.put(`/agreement?email=${email}`,{status:'checked'})
        .then(data=>{
           if(data.data.modifiedCount){
            axiosUrl.delete(`/agreementAdmin?id=${id}`)
            .then(data=>{
                if(data.data.deletedCount){
                    toast.success('Accepted done')
                    refetch()
                }
            }).catch(error=>toast.error(error.message))
           }
        })
        .catch(error=>toast.error(error.message))
    }







    return (
        <div className="p-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-center text-2xl font-serif text-[#E49BFF] ">Agreement Request ({agreementData.length})</h1>

                <div className="my-10">

                    {
                        agreementData?.map((data, i) =>
                            <div key={i} className="flex bg-base-100 shadow-xl border">

                                <figure><img src={data?.image} className="w-64 h-full" /></figure>

                                <div className="flex-1 p-4">
                                    <div className="h-10 flex items-center gap-2 mx-auto px-4 ">
                                        <span><BiBed /></span>
                                        <span><TiWiFi /></span>
                                        <span><FaCar /></span>
                                        <span><CgCoffee /></span>
                                        <span><BiAlarm /></span>
                                        <span><FaSwimmer /></span>
                                        <span><MdSecurity /></span>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center px-4">
                                            <h2 className="font-bold text-xl">{data?.apartmentName}</h2>
                                            <p className="text-4xl">${data?.rent}</p>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="p-4">
                                                <p><span className="font-bold">user:</span> {data?.userName}</p>
                                                <p><span className="font-bold">email:</span> {data?.email}</p>
                                                <p><span className="font-bold">Floor no:</span> {data?.floorNo}</p>
                                                <p><span className="font-bold">Block name:</span> {data?.blockName}</p>
                                                <p><span className="font-bold">Room no:</span> {data?.apartmentNo}</p>
                                                <p><span className="font-bold">Request date:</span> {data?.date}/{data?.mount}/{data?.year}</p>
                                            </div>

                                            <div className="flex flex-col items-center space-y-2">
                                              <div><button className="btn btn-sm bg-[#7EA1FF] text-white" onClick={()=>handleAccept(data?.email,data?._id)}>Accept button</button></div>
                                              <div><button className="btn btn-sm bg-[#E49BFF] text-white" onClick={()=>handleReject(data?.email,data?._id)}>Reject button</button></div>
                                            </div>
                                        </div>


                                    </div>

                                </div>

                            </div>)
                    }


                </div>


            </div>
        </div>
    );
};

export default AgreementRequest;