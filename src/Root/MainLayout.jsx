/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { useState } from "react";
import { BarLoader, PropagateLoader } from "react-spinners";

const MainLayout = () => {

    const [spinner, setSpinner] = useState(true)

    setTimeout(() => {
        setSpinner(false)
    }, 2500)



    return (
        <div>
            {
                spinner ?
                    <div className="flex flex-col items-center justify-center  min-h-screen space-y-3">
                        <a data-aos="fade-down" data-aos-duration="1500" className="flex items-center gap-0 "><img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/commercial-development-management.png" alt="commercial-development-management" />
                            
                            <span className="text-xl text-white font-bold" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" >O</span>
                            <span className="text-xl text-white font-bold"  data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">N</span>
                            <span className="text-xl text-white font-bold" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800">E</span>
                            <span className="text-[#E49BFF] font-bold mt-0.5" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000">B</span>
                            <span className="text-[#E49BFF] font-bold mt-0.5" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1200">U</span>
                            <span className="text-[#E49BFF] font-bold mt-0.5" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1400">I</span>
                            <span className="text-[#E49BFF] font-bold mt-0.5" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1600">L</span>
                            <span className="text-[#E49BFF] font-bold mt-0.5" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1800">D</span>

                        </a>
                        <PropagateLoader color="#E49BFF" />
                    </div>
                    :
                    <>
                        <Nav />
                        <Outlet />
                        <Footer />
                    </>
            }
        </div>
    );
};

export default MainLayout;