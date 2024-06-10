
import { Link, NavLink } from "react-router-dom";
import { BiHome, BiLogOut } from "react-icons/bi";
import { MdApartment } from "react-icons/md";
import { TfiUnlock } from "react-icons/tfi";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { CiMenuBurger } from "react-icons/ci";
import toast from "react-hot-toast";
import { HashLoader } from "react-spinners";
import useRole from "../Hooks/useRole";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [isShow, setIsShow] = useState(false)
    const { user, logout, loading } = useAuth();
    const [role] = useRole()

    const navLink =
        <>
            <NavLink data-aos="zoom-in" data-aos-duration="3000"  data-aos-delay="1000"
                className={({ isActive }) => isActive ? `flex flex-col justify-center items-center text-white border-b-2 border-[#7EA1FF]` : `flex flex-col justify-center text-white items-center`} to={'/'}>
                <BiHome className="text-sm text-[#7EA1FF] hidden lg:flex" /><span className="text-xs uppercase font-bold">HOME</span>
            </NavLink>

            <NavLink data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="1500"
             className={({ isActive }) => isActive ? `flex flex-col justify-center items-center text-white border-b-2 border-[#7EA1FF]` : `flex flex-col justify-center text-white items-center`} to={'/apartment'}>
                <MdApartment className="text-sm text-[#7EA1FF] hidden lg:flex" />
                <span className="text-xs uppercase font-bold">Apartment</span>
            </NavLink>

            <NavLink data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="2000"
             className={'flex flex-col justify-center items-center text-white'} to={role === 'user' ? '/dashboard/user-Profile' : role === 'member' ? '/dashboard/member-Profile' : '/dashboard/admin-Profile'}>
                <MdApartment className="text-sm text-[#7EA1FF] hidden lg:flex" />
                <span className="text-xs uppercase font-bold">Dashboard</span>
            </NavLink>
        </>


    return (
        <div>
            <section className=" bg-black opacity-85 relative md:fixed  w-full z-40">
                <div className="navbar max-w-7xl mx-auto">
                    <div className="navbar-start">

                        <div className="dropdown" >
                            <div tabIndex={0} role="button" className={`btn btn-ghost lg:hidden`} onClick={() => {
                                setOpen(!open)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className={`menu menu-sm dropdown-content space-y-1 mt-3 z-50 p-2 shadow bg-black rounded-box w-auto ${open ? 'block' : 'hidden'}`}>
                                {navLink}
                            </ul>

                        </div>



                        <a data-aos="fade-down" data-aos-duration="3000" className="flex items-center gap-0 "><img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/commercial-development-management.png" alt="commercial-development-management" /><span className="text-xl text-white font-bold">ONE</span><span className="text-[#E49BFF] font-bold mt-0.5">BUILD</span></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal flex items-center gap-6">
                            {navLink}
                        </ul>
                    </div>

                    <div className="navbar-end" data-aos="fade-down" data-aos-duration="3000">

                        <>
                            {
                                loading ? <HashLoader color="#E49BFF" size={45} /> :
                                    <>
                                        {
                                            user
                                                ?
                                                <div className="dropdown dropdown-end  ">
                                                    <div tabIndex={0} role="button" onClick={() => setIsShow(!isShow)} className="flex items-center gap-2 bg-slate-100 rounded-lg p-1.5">
                                                        <CiMenuBurger />
                                                        <div className="avatar">
                                                            <div className="w-8 rounded-full ring ring-[#7EA1FF] ring-offset-base-100 ">
                                                                <img src={user?.photoURL} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul tabIndex={0} className={`dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-auto mt-4 
                                                      ${isShow ? '' : 'hidden'}`}>
                                                        <img src={user?.photoURL} className="w-14 h-14 mx-auto rounded-full" />
                                                        <h1 className="text-center font-bold">{user?.displayName}</h1>
                                                        <div className="flex justify-center items-center gap-0.5 p-1 mt-1 cursor-pointer hover:underline" onClick={() => {
                                                            logout()
                                                                .then(() => toast.success('Logout successful'))
                                                                .catch((error) => toast.error(error.message))
                                                        }}><BiLogOut className="text-xl" />Logout</div>
                                                    </ul>
                                                </div>
                                                :
                                                <Link className="flex items-center text-white font-bold" to={'/login'}><TfiUnlock className="text-base text-[#7EA1FF]"
                                                /> Login</Link>
                                        }
                                    </>
                            }
                        </>

                    </div>
                </div>
            </section>
            {/* <TopInfo /> */}

        </div>
    );
};

export default Nav;
