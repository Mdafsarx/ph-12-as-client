import { NavLink } from "react-router-dom";
import { BsPeople } from "react-icons/bs";
import { FiFile } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { RiCoupon2Fill } from "react-icons/ri";
import { TfiAnnouncement } from "react-icons/tfi";

const AdminRoutes = () => {
    return (
        <>
            <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'}><ImProfile />Admin Profile</NavLink>
            <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'}><BsPeople />Manage Member</NavLink>
            <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'} to={'/dashboard/MakeAnnouncement'}><TfiAnnouncement />Make Announcement</NavLink>
            <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'} to={'/dashboard/AgreementRequest'}><FiFile />Agreement Requests</NavLink>
            <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'}><RiCoupon2Fill />Manage Coupons</NavLink>
        </>
    );
};

export default AdminRoutes;