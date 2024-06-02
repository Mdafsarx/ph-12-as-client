import { BiAlarm, BiBed } from "react-icons/bi";
import { CgCoffee } from "react-icons/cg";
import { FaCar, FaSwimmer } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { TiWiFi } from "react-icons/ti";

const ApartmentCard = () => {
    return (
        <div>
            <div className="bg-base-100 shadow-2xl">
                <figure>
                    <img src="/ab1.jpg" alt="Shoes" className="h-52" />
                </figure>

                <div className="flex flex-col items-start  p-3">

                    <div className="h-10 flex items-center gap-2 mx-auto bg-gray-100 shadow-md border px-4 -mt-8">
                        <span><BiBed /></span>
                        <span><TiWiFi /></span>
                        <span><FaCar /></span>
                        <span><CgCoffee /></span>
                        <span><BiAlarm /></span>
                        <span><FaSwimmer /></span>
                        <span><MdSecurity /></span>
                    </div>
                    <h1 className="text-xl font-serif pt-2 text-center">Minimal Duplex Apartment</h1>

                    <div>
                        <p><span className="font-bold">Block name:</span> A1</p>
                        <p><span className="font-bold">Apartment no:</span> 909</p>
                        <p><span className="font-bold">Floor no:</span> 11</p>
                        <p><span className="font-bold">Rent:</span> 2300$</p>
                        <p><span className="font-bold">Apartment no:</span> A2</p>
                    </div>


                </div>
                  
                  <div className="max-w-60 mx-auto pt-1 pb-4">
                    <button className="btn btn-outline bg-[#E49BFF] border-0 border-b-4 border-[#7EA1FF] text-white shadow-md btn-block">Agreement</button>
                  </div>
                   
            </div>
        </div>
    );
};

export default ApartmentCard;