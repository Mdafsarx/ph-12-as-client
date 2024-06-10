import { TiHomeOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { MdOutlinePayment } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";




const MemberRoutes = () => {
    return (
        <>
            <NavLink className={({ isActive }) => isActive ?
                `flex items-center text-sm gap-1 text-[#7EA1FF] ` : `flex items-center text-sm gap-1 hover:text-[#7EA1FF]`}
                to={'/dashboard/member-Profile'}><TiHomeOutline /><span className="hidden lg:block">My Profile</span></NavLink>
            <NavLink className={({ isActive }) => isActive ?
                `flex items-center text-sm gap-1 text-[#7EA1FF] ` : `flex items-center text-sm gap-1 hover:text-[#7EA1FF]`}
                to={'/dashboard/make-Payment'}><MdOutlinePayment /><span className="hidden lg:block">Make payment</span></NavLink>
            <NavLink className={({ isActive }) => isActive ?
                `flex items-center text-sm gap-1 text-[#7EA1FF] ` : `flex items-center text-sm gap-1 hover:text-[#7EA1FF]`}
                to={'/dashboard/payment-History'}><FaHistory /><span className="hidden lg:block">Payment History</span></NavLink>
            <NavLink className={({ isActive }) => isActive ?
                `flex items-center text-sm gap-1 text-[#7EA1FF] ` : `flex items-center text-sm gap-1 hover:text-[#7EA1FF]`}
                to={'/dashboard/Announcement'}><TfiAnnouncement /><span className="hidden lg:block">Announcements</span></NavLink>
        </>
    );
};

export default MemberRoutes;