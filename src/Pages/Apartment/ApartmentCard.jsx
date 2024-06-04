import { BiAlarm, BiBed } from "react-icons/bi";
import { CgCoffee } from "react-icons/cg";
import { FaCar, FaSwimmer } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { TiWiFi } from "react-icons/ti";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';




<InnerImageZoom src="/path/to/image.jpg" zoomSrc="/path/to/zoom-image.jpg" />

const ApartmentCard = ({data}) => {
    const {name,apartmentImage,floorNo,blockName,rent,apartmentNo}=data||{}
    console.log(data)
    return (
        <div>
            <div className="bg-base-100 shadow-2xl hover:scale-110">
                <figure>
                    <img src={apartmentImage} alt={name} className="h-52 w-full " />
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
                    <h1 className="text-xl font-serif pt-2">{name}</h1>

                    <div>
                        <p><span className="font-bold">Block name:</span> {blockName}</p>
                        <p><span className="font-bold">Apartment no:</span> {apartmentNo}</p>
                        <p><span className="font-bold">Floor no:</span> {floorNo}</p>
                        <p><span className="font-bold">Rent:</span> {rent}$</p>
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