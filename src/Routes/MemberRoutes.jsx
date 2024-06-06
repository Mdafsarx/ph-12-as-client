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
                to={'/dashboard/member-Profile'}><TiHomeOutline />My Profile</NavLink>
            <NavLink className={({ isActive }) => isActive ?
                `flex items-center text-sm gap-1 text-[#7EA1FF] ` : `flex items-center text-sm gap-1 hover:text-[#7EA1FF]`}
                to={'/dashboard/make-Payment'}><MdOutlinePayment />Make payment</NavLink>
            <NavLink className={({ isActive }) => isActive ?
                `flex items-center text-sm gap-1 text-[#7EA1FF] ` : `flex items-center text-sm gap-1 hover:text-[#7EA1FF]`}
                to={'/dashboard/payment-History'}><FaHistory />Payment History</NavLink>
            <NavLink className={({ isActive }) => isActive ?
                `flex items-center text-sm gap-1 text-[#7EA1FF] ` : `flex items-center text-sm gap-1 hover:text-[#7EA1FF]`}
                to={'/dashboard/Announcement'}><TfiAnnouncement />Announcements</NavLink>
        </>
    );
};

export default MemberRoutes;