import { TiHomeOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { MdOutlinePayment } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { useSelector } from "react-redux";




const MemberRoutes = () => {
    const isOpen = useSelector(state => state.open.value)
    return (
        <div className="space-y-3">
            <NavLink to={'/dashboard/member-Profile'} className={({ isActive }) => isActive ? `bg-gradient-to-r from-[#E49BFF66]  via-[#7EA1FF66]  to-[#7EA1FFCC] hover:scale-105 hover:duration-300 shadow-sm rounded-md flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}` : `flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}`}>
                <TiHomeOutline className="text-lg"/>  {isOpen && 'Profile'}
            </NavLink>
            <NavLink to={'/dashboard/make-Payment'} className={({ isActive }) => isActive ? `bg-gradient-to-r from-[#E49BFF66]  via-[#7EA1FF66]  to-[#7EA1FFCC] hover:scale-105 hover:duration-300 shadow-sm rounded-md flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}` : `flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}`}>
                <MdOutlinePayment className="text-lg"/>  {isOpen && 'payment'}
            </NavLink>
            <NavLink to={'/dashboard/Announcement'} className={({ isActive }) => isActive ? `bg-gradient-to-r from-[#E49BFF66]  via-[#7EA1FF66]  to-[#7EA1FFCC] hover:scale-105 hover:duration-300 shadow-sm rounded-md flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}` : `flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}`}>
                <TfiAnnouncement className="text-lg"/>  {isOpen && 'Announcements'}
            </NavLink>
            <NavLink to={'/dashboard/payment-History'} className={({ isActive }) => isActive ? `bg-gradient-to-r from-[#E49BFF66]  via-[#7EA1FF66]  to-[#7EA1FFCC] hover:scale-105 hover:duration-300 shadow-sm rounded-md flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}` : `flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}`}>
                <FaHistory className="text-lg"/>  {isOpen && 'History'}
            </NavLink>
        </div>
    );
};

export default MemberRoutes;