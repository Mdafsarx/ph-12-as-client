import { BiAlarm, BiBed } from "react-icons/bi";
import { CgCoffee } from "react-icons/cg";
import { FaCar, FaSwimmer } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { TiWiFi } from "react-icons/ti";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import CommonUrl from "../../Hooks/CommonUrl";
import toast from "react-hot-toast";
import useRole from "../../Hooks/useRole";





const ApartmentCard = ({ data }) => {
    const axiosUrl = CommonUrl()
    const { user } = useAuth()
    const { name, apartmentImage, floorNo, blockName, rent, apartmentNo } = data || {};
    const navLink = useNavigate();
    const Data = new Date
    const today = Data.getDate();
    const mount = Data.getMonth() + 1;
    const year = Data.getFullYear();
    const [role]=useRole()


    const handleAgreement = () => {
        if (!user) return navLink('/login')
            if(role==='admin')return toast.error("Admin can't add agreement")

        const agreementData =
        {
            userName: user?.displayName, email: user?.email, floorNo, blockName, apartmentName: name,
            apartmentNo, rent, status: 'pending', date: today, mount, year, image: apartmentImage,
        };
        axiosUrl.post('/agreement', agreementData)
            .then(data => {
                if (data.data.insertedId) {
                    // admin agreement
                    axiosUrl.post('/agreementAdmin', agreementData)
                        .then(data => {
                            if (data.data.insertedId) {

                                
                                toast.success('Agreement successful')
                            }
                            else if (data.data.message) toast.error('One user will be able to apply for one apartment')
                        })
                        .catch(error => toast.error(error.message))
                }
                else if (data.data.message) toast.error('One user will be able to apply for one apartment')
            })
            .catch(error => toast.error(error.message))


    }


    return (
        <div  data-aos="zoom-in-up" data-aos-duration="1500"  data-aos-delay="100">

            <div className="bg-[#21232C] *:text-white shadow-2xl hover:scale-105 duration-700 rounded-xl ">

                <figure>
                    <img src={apartmentImage} alt={name} className="h-52 w-full rounded-t-xl" />
                </figure>

                <div className="flex flex-col items-start  p-3">

                    <div className="h-10 flex items-center gap-2 mx-auto bg-[#303133] shadow-md border rounded-md px-4 -mt-8">
                        <span><BiBed /></span>
                        <span><TiWiFi /></span>
                        <span><FaCar /></span>
                        <span><CgCoffee /></span>
                        <span><BiAlarm /></span>
                        <span><FaSwimmer /></span>
                        <span><MdSecurity /></span>
                    </div>
                    <h1 className="text-xl font-serif pt-2">{name}</h1>

                    <div>
                        <p><span className="font-bold">Block name:</span> {blockName}</p>
                        <p><span className="font-bold">Apartment no:</span> {apartmentNo}</p>
                        <p><span className="font-bold">Floor no:</span> {floorNo}</p>
                        <p><span className="font-bold">Rent:</span> {rent}$</p>
                    </div>


                </div>

                <div className="max-w-60 mx-auto pt-1 pb-4">
                    <button className="btn btn-outline bg-[#E49BFF] hover:bg-[#7EA1FF] border-0 border-b-[5.5px] border-[#7EA1FF] hover:border-[#E49BFF] text-black shadow-md btn-block"
                        onClick={handleAgreement}
                    >Agreement</button>
                </div>

            </div>
        </div>
    );
};

export default ApartmentCard;