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
    }, 3000)



    return (
        <div>
            {
                spinner ?
                    <div className="flex flex-col items-center justify-center  min-h-screen space-y-3">
                        <a data-aos="fade-down" data-aos-duration="3000" className="flex items-center gap-0 "><img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/commercial-development-management.png" alt="commercial-development-management" /><span className="text-xl text-black font-bold">ONE</span><span className="text-[#E49BFF] font-bold mt-0.5">BUILD</span></a>
                        <BarLoader color="#E49BFF"   />
                        {/* <PropagateLoader color="#E49BFF" /> */}
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