import useAuth from "../../../Hooks/useAuth";
import { SiFirebase } from "react-icons/si";
import useRole from "../../../Hooks/useRole";
import { BiAlarm, BiBed, BiUser } from "react-icons/bi";
import { TiWiFi } from "react-icons/ti";
import { FaCar, FaSwimmer } from "react-icons/fa";
import { CgCoffee } from "react-icons/cg";
import { MdSecurity } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import CommonUrl from "../../../Hooks/CommonUrl";
import "./responsive.css"



const Profile = () => {
    const axiosUrl=CommonUrl();
    const { user = {} } = useAuth();
    console.log(user)
    const [role] = useRole();
    const {data=[]}=useQuery({
        queryKey:['agreement',user?.email],
        queryFn:async()=>{
          const res=await axiosUrl(`/agreement/${user?.email}`)
          return res.data ;
        }
    })





    return (
        <div className="max-w-3xl mx-auto flex justify-center w-[85vw] md:w-auto">

            <div className="my-10 space-y-10 ">

                {/* profile */}
                <div data-aos="fade-down" data-aos-duration="1500">

                    <h1 className="text-sm md:text-2xl font-bold pb-4 text-start pl-2 uppercase "><span className="text-[#E49BFF]">PROFILE</span></h1>
                    <div className="p-8 flex flex-col items-center md:flex-row gap-5 shadow-lg rounded-lg border">
                        <div>
                            <img src={user?.photoURL} className="rounded-lg md:size-36" />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div>
                                <h2 className="text-sm uppercase md:text-2xl font-semibold">{user?.displayName}</h2>
                            </div>
                            <div className="md:space-y-1">
                                <span className="hidden md:flex items-center md:space-x-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                        <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                    </svg>
                                    <span className="">{user?.email}</span>
                                </span>
                                <span className="flex items-center md:space-x-2">
                                    <SiFirebase />
                                    <span className="">{user?.providerId}</span>
                                </span>
                                <span className="flex items-center md:space-x-2">
                                    <span className="font-bold hidden md:block">Type:</span>
                                    <span className="flex items-center"><BiUser />{role}</span>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* agreement */}
                <div className="text-black"  data-aos="fade-up" data-aos-duration="1500">
                    <h1 className=" text-sm md:text-2xl font-bold pb-4 text-center md:text-start pl-2 uppercase"><span className="text-[#7EA1FF]">Agreement accept info</span></h1>
                    <div className="flex bg-base-100 shadow-xl border rounded-lg">
                        <div className="flex-1 p-4">
                            <div className="h-10 flex items-center justify-center gap-2 mx-auto px-4 ">
                                <span><BiBed /></span>
                                <span><TiWiFi /></span>
                                <span><FaCar /></span>
                                <span><CgCoffee /></span>
                                <span><BiAlarm /></span>
                                <span><FaSwimmer /></span>
                                <span><MdSecurity /></span>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="p-4">
                                        <p><span className="font-bold">Floor no:</span> {role==='user'?'none':data?.floorNo}</p>
                                        <p><span className="font-bold">Block name:</span> {role==='user'?'none':data?.blockName}</p>
                                        <p><span className="font-bold">Room no:</span> {role==='user'?'none':data?.apartmentNo}</p>
                                        <p><span className="font-bold">Rent:</span> {role==='user'?'none':data?.rent}$</p>
                                        <p><span className="font-bold">Request date:</span> {role==='user'?'none':data?.date}/{role==='user'?'none':data?.mount}/{role==='user'?'none':data?.year}</p>
                                        <p><span className="font-bold">Accept date:</span> {role==='user'?'none':data?.date1}/{role==='user'?'none':data?.mount1}/{role==='user'?'none':data?.year1}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Profile;