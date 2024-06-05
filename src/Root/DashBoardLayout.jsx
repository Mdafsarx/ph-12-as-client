import { BiHome, BiLogOut } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FiFile } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { MdApartment } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { TfiAnnouncement } from "react-icons/tfi";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const DashBoardLayout = () => {
    const { logout } = useAuth()
    return (
        <div>

            <div className="flex">

                {/* dashboard */}
                <div className="bg-black w-48 min-h-screen text-white relative">

                    {/* website name */}
                    <div className="p-2 mt-1">
                        <a className="flex items-center gap-0 ">
                            <img width="44" height="44" src="https://img.icons8.com/pulsar-gradient/48/commercial-development-management.png" alt="commercial-development-management" />
                            <span className="text-xl text-white font-bold">ONE</span><span className="text-[#E49BFF] font-bold mt-0.5">BUILD</span></a>
                    </div>

                    {/* routes */}
                    <div className="p-4 space-y-3 mt-3 ">
                        <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'}><ImProfile />Admin Profile</NavLink>
                        <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'}><BsPeople />Manage Member</NavLink>
                        <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'} to={'/dashboard/MakeAnnouncement'}><TfiAnnouncement />Make Announcement</NavLink>
                        <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'} to={'/dashboard/AgreementRequest'}><FiFile />Agreement Requests</NavLink>
                        <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'}><RiCoupon2Fill />Manage Coupons</NavLink>

                        <div className="divider divider-info pt-5 pb-2"></div>

                        {/* static routes */}
                        <div className="space-y-3">
                            <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'}><BiHome />Admin Profile</NavLink>
                            <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'}><MdApartment />Apartment</NavLink>
                        </div>


                    </div>

                    {/* logout */}
                    <div className="flex items-center  gap-0.5 p-1  cursor-pointer hover:underline absolute bottom-6 left-4" onClick={() => {
                        logout()
                            .then(() => toast.success('Logout successful'))
                            .catch((error) => toast.error(error.message))
                    }}><BiLogOut className="text-xl" />Logout</div>


                </div>

                <div>
                    {/* active route name and user name */}
                    <div className="bg-black w-[calc(100vw-192px)] h-14">

                    </div>

                    {/* outlet */}
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DashBoardLayout;