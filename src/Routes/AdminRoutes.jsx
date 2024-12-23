import { NavLink } from "react-router-dom";
import { BsPeople } from "react-icons/bs";
import { FiFile } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { RiCoupon2Fill } from "react-icons/ri";
import { TfiAnnouncement } from "react-icons/tfi";
import { useSelector } from "react-redux";


const AdminRoutes = () => {

    const isOpen = useSelector(state => state.open.value)

    return (
        <div className="space-y-3">
            <NavLink to={'/dashboard/admin-Profile'} className={({ isActive }) => isActive ? `bg-gradient-to-r from-[#E49BFF66]  via-[#7EA1FF66]  to-[#7EA1FFCC] hover:scale-105 hover:duration-300 shadow-sm rounded-md flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}` : `flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}`}>
                <ImProfile className="text-lg" />  {isOpen && 'Profile'}
            </NavLink>

            <NavLink to={'/dashboard/manage-Member'} className={({ isActive }) => isActive ? `bg-gradient-to-r from-[#E49BFF66]  via-[#7EA1FF66]  to-[#7EA1FFCC] hover:scale-105 hover:duration-300 shadow-sm rounded-md flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}` : `flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}`}>
                <BsPeople className="text-lg" />  {isOpen && 'Members'}
            </NavLink>

            <NavLink to={'/dashboard/Make-Announcement'} className={({ isActive }) => isActive ? `bg-gradient-to-r from-[#E49BFF66]  via-[#7EA1FF66]  to-[#7EA1FFCC] hover:scale-105 hover:duration-300 shadow-sm rounded-md flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}` : `flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}`}>
                <TfiAnnouncement className="text-lg" />  {isOpen && 'Announcement'}
            </NavLink>

            <NavLink to={'/dashboard/Agreement-Request'} className={({ isActive }) => isActive ? `bg-gradient-to-r from-[#E49BFF66]  via-[#7EA1FF66]  to-[#7EA1FFCC] hover:scale-105 hover:duration-300 shadow-sm rounded-md flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}` : `flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}`}>
                <FiFile className="text-lg" />  {isOpen && 'Agreement'}
            </NavLink>

            <NavLink to={'/dashboard/coupon'} className={({ isActive }) => isActive ? `bg-gradient-to-r from-[#E49BFF66]  via-[#7EA1FF66]  to-[#7EA1FFCC] hover:scale-105 hover:duration-300 shadow-sm rounded-md flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}` : `flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}`}>
                <RiCoupon2Fill className="text-lg" />  {isOpen && 'Coupons'}
            </NavLink>
        </div>
    );
};

export default AdminRoutes;