import { Link, NavLink, Outlet, Route, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { CiSettings } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import toast from "react-hot-toast";
import AdminRoutes from "../Routes/AdminRoutes";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import UserRoutes from "../Routes/UserRoutes";
import MemberRoutes from "../Routes/MemberRoutes";
import useRole from "../Hooks/useRole";
import { FaHouseDamage } from "react-icons/fa";
import { MdDarkMode, MdHelpOutline, MdNightlight, MdNightlightRound, MdSpaceDashboard } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../store/openSlice";

const DashBoardLayout = () => {
    const [role] = useRole();
    const [isShow, setIsShow] = useState(false)
    const { user, logout, loading } = useAuth();
    const isOpen = useSelector(state => state.open.value)
    const dispatch = useDispatch()



    return (
        <div>

            <div className="flex">

                {/* dashboard */}
                <div className={`${isOpen ? 'w-60' : 'w-[74px]'}  border-r border-[#E49BFF66] min-h-screen text-white flex flex-col justify-between`}>
                    <div>
                        {/* website name */}
                        <div>
                            <Link to={'/'} className='h-14 flex items-center gap-x-0 pl-5 pt-1'>
                                <img className="size-9" src="https://img.icons8.com/pulsar-gradient/48/commercial-development-management.png" alt="commercial-development-management" />
                                {isOpen && <p className="hidden lg:flex items-center -mb-1">
                                    <span className="text-xl text-white font-bold">ONE</span>
                                    <span className="text-[#E49BFF] font-bold mt-0.5">BUILD</span>
                                </p>}
                            </Link>
                        </div>

                        {/* routes */}
                        <div className={`p-[1.4rem] pt-[1.4] ${isOpen && 'pr-3'}`}>
                            {
                                role === 'admin' ? <AdminRoutes /> : role === 'member' ? <MemberRoutes /> : <UserRoutes />
                            }
                        </div>
                    </div>


                    <div className={`p-[1.4rem] ${isOpen && 'pr-3'}`}>
                        <p className="uppercase text-sm text-gray-400">{isOpen && 'others'}</p>
                        <div className="space-y-3">
                            <NavLink to={'/dashboard/setting'} className={({ isActive }) => isActive ? `bg-gradient-to-r from-[#E49BFF66]  via-[#7EA1FF66]  to-[#7EA1FFCC] hover:scale-105 hover:duration-300 shadow-sm rounded-md flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}` : `flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}`}>
                                <CiSettings className="text-xl" />{isOpen && 'Setting'}
                            </NavLink>
                            <NavLink to={'/dashboard/help-center'} className={({ isActive }) => isActive ? `bg-gradient-to-r from-[#E49BFF66]  via-[#7EA1FF66]  to-[#7EA1FFCC] hover:scale-105 hover:duration-300 shadow-sm rounded-md flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}` : `flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}`}>
                                <MdHelpOutline className="text-xl" />{isOpen && 'Help Center'}
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* dashboard navbar */}
                <div>

                    <div>
                        <div className={isOpen ? "w-[calc(100vw-240px)]" : 'w-[calc(100vw-74px)]'}>
                            <div className="h-14 px-5 border-b border-[#E49BFF66] flex items-center justify-between">
                                {
                                    isOpen
                                        ? <GoSidebarExpand onClick={() => dispatch(toggleOpen())} className="text-2xl cursor-pointer hover:text-[#7EA1FF] hidden md:block" />
                                        : <GoSidebarCollapse onClick={() => dispatch(toggleOpen())} className="text-2xl cursor-pointer hover:text-[#7EA1FF] hidden md:block" />
                                }
                                {/* profile */}
                                <div className="h-14 flex items-center gap-4">
                                    <div>
                                        <IoMoon className="text-2xl -mb-1" />
                                    </div>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" onClick={() => setIsShow(!isShow)} className="flex items-center">
                                            <div className="avatar">
                                                <div className="w-8 rounded-full">
                                                    <img src={user?.photoURL} />
                                                </div>
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className={`dropdown-content z-50 border border-[#E49BFF99] bg-[#15151AE6] w-80 mt-2 rounded-md text-white ${isShow ? '' : 'hidden'}`}>
                                            {/* 1 image and name/email */}
                                            <div className="flex items-center gap-3 border-b border-[#E49BFF99] p-3.5">
                                                <figure>
                                                    <img src={user?.photoURL} className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                                                </figure>
                                                <div className="text-xs space-y-1">
                                                    <h1 className="font-bold">{user?.displayName}</h1>
                                                    <h1 className="font-bold">{user?.email || 'No email provided'}</h1>
                                                </div>
                                            </div>
                                            {/* logout button */}
                                            <div>
                                                <p onClick={() => {
                                                    logout()
                                                        .then(() => toast.success('Logout successful'))
                                                        .catch((error) => toast.error(error.message))
                                                }}
                                                    className="flex items-center font-bold gap-8 p-3.5 pl-[24px] cursor-pointer hover:rounded-b-md hover:bg-[#00000066]"><BiLogOut className="text-lg" /> <span className="text-xs">Logout</span>
                                                </p>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <Outlet />
                </div>

            </div>

        </div>
    );
};

export default DashBoardLayout;