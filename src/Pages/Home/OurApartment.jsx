/* eslint-disable react/no-unescaped-entities */
import { BiBuilding, BiStreetView } from "react-icons/bi";
import MyApartment from "./MyApartment";
import { MdApartment, MdNumbers } from "react-icons/md";
import { GoLocation, GoPeople } from "react-icons/go";
import { FaCity, FaLandmark } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import img1 from "../../images/a1.webp"
import img2 from "../../images/a5.jpg"
import img3 from "../../images/a3.jpeg"
import img4 from "../../images/a4.jpg"

const OurApartment = () => {
    return (
        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto py-20 px-5">

            <div className="p-5" data-aos="fade-right" data-aos-duration="1500">
                <h3 className="text-2xl font-bold uppercase text-center text-[#E49BFF]">Home is not a place<br /> it's a feeling.</h3>
                <ul className="space-y-1.5 pt-1">
                    <li className="flex items-center gap-0.5"><BiBuilding /><span className="font-bold">Building Number:</span> 7</li>
                    <li className="flex items-center gap-0.5"><BiStreetView /><span className="font-bold">Street Name:</span> Elm Street</li>
                    <li className="flex items-center gap-0.5"><MdApartment /><span className="font-bold">Apartment Number:</span> 12B</li>
                    <li className="flex items-center gap-0.5"><GoPeople /><span className="font-bold">Neighborhood:</span> Sibgonj</li>
                    <li className="flex items-center gap-0.5"><FaCity /><span className="font-bold">City:</span> Sylhet</li>
                    <li className="flex items-center gap-0.5"><MdNumbers /><span className="font-bold">Postal Code:</span> 3100</li>
                    <li className="flex items-center gap-0.5"><TbWorld /><span className="font-bold">Country:</span> Bangladesh</li>
                    <li className="flex items-center gap-0.5"><MdNumbers /><span className="font-bold">Postal Code:</span> 3100</li>
                    <li className="hidden md:flex items-center gap-0.5"><FaLandmark />
                    <span className="font-bold">Landmark:</span> Near Bangladesh bank school</li>
                </ul>

            </div>

            <div data-aos="fade-left" data-aos-duration="1500">
                <MyApartment />
            </div>



            <div className="grid grid-cols-2 gap-4">
                <img src={img1} className="md:h-52 rounded-xl"  data-aos="zoom-in" data-aos-duration="1500" />
                <img src={img2} className="md:h-52 rounded-xl"  data-aos="zoom-in" data-aos-duration="1500"  data-aos-delay="300"/>
                <img src={img3} className="md:h-52 rounded-xl"  data-aos="zoom-in" data-aos-duration="1500"  data-aos-delay="600"/>
                <img src={img4} className="md:h-52 rounded-xl"  data-aos="zoom-in" data-aos-duration="1500"  data-aos-delay="900"/>
            </div>


            <div className="space-y-3 flex flex-col justify-center" data-aos="fade-left" data-aos-duration="1500">
                <h1 className="text-3xl font-bold text-[#E49BFF] uppercase text-balance">Find us on <br /> <span className="text-[#7EA1FF]">the map</span></h1>
                <p className="text-lg text-pretty">Just moved in and already feeling <br />like the monarch of my tiny  kingdom 🏰✨ <br /> Sometimes, the smallest spaces spark <br />the biggest dreams.</p>
                <a href="https://www.google.com/maps/place/Sylhet/@24.8999805,91.8198358,13z/data=!3m1!4b1!4m6!3m5!1s0x375054d3d270329f:0xf58ef93431f67382!8m2!3d24.9047808!4d91.8600079!16zL20vMDJ0ZDJ4?entry=ttu" 
                 target="_blank"
                className="btn font-bold bg-[#7EA1FF] hover:bg-[#E49BFF] text-white hover:text-black w-32 border-none group">Find us <GoLocation className="text-2xl text-[#AF47D2] group-hover:text-[#5c88ff]"/></a>
            </div>

        </div>
    );
};

export default OurApartment;