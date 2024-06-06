import { TiHomeOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { MdOutlinePayment } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";




const MemberRoutes = () => {
    return (
        <>
            <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'}
                to={'/dashboard/memberProfile'}><TiHomeOutline />My Profile</NavLink>
            <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'}
                to={'/dashboard/makePayment'}><MdOutlinePayment />Make payment</NavLink>
            <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'}
                to={'/dashboard/paymentHistory'}><FaHistory />Payment History</NavLink>
            <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'}
                to={'/dashboard/Announcement'}><TfiAnnouncement />Announcements</NavLink>
        </>
    );
};

export default MemberRoutes;