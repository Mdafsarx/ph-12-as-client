
import { NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { MdApartment } from "react-icons/md";
import { TfiUnlock } from "react-icons/tfi";
import { useState } from "react";

const Nav = () => {
    const [open, setOpen] = useState(false);

    const navLink =
        <>
            <NavLink className={'flex flex-col justify-center text-white items-center'}>
                <BiHome className="text-sm text-[#7EA1FF]" /><span className="text-xs uppercase font-bold">HOME</span>
            </NavLink>

            <NavLink className={'flex flex-col justify-center text-white items-center'}>
                <MdApartment className="text-sm text-[#7EA1FF]" />
                <span className="text-xs uppercase font-bold">Apartment</span>
            </NavLink>
        </>


    return (
        <div className=" ">
            <section className=" bg-black opacity-85 relative md:fixed  w-full z-40">
                <div className="navbar max-w-7xl mx-auto">
                    <div className="navbar-start">

                        <div className="dropdown" >
                            <div tabIndex={0} role="button" className={`btn btn-ghost lg:hidden`} onClick={() => {
                                setOpen(!open)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-black rounded-box w-auto ${open ? 'block' : 'hidden'}`}>
                                {navLink}
                            </ul>

                        </div>



                        <a className="flex items-center gap-0 "><img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/commercial-development-management.png" alt="commercial-development-management" /><span className="text-xl text-white font-bold">ONE</span><span className="text-[#E49BFF] font-bold mt-0.5">BUILD</span></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal flex items-center gap-6">
                            {navLink}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="flex items-center text-white font-bold"><TfiUnlock className="text-base text-[#7EA1FF]" /> Login</button>
                    </div>
                </div>
            </section>
            {/* <TopInfo /> */}

        </div>
    );
};

export default Nav;
