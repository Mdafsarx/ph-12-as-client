import { NavLink } from "react-router-dom";
import { BsPeople } from "react-icons/bs";
import { FiFile } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { RiCoupon2Fill } from "react-icons/ri";
import { TfiAnnouncement } from "react-icons/tfi";

const AdminRoutes = () => {
    return (
        <>
            <NavLink className={({isActive})=>isActive?
            `flex items-center text-sm gap-1 text-[#7EA1FF] `:`flex items-center text-sm gap-1 hover:text-[#7EA1FF]`} to={'/'}><ImProfile />Admin Profile</NavLink>
            <NavLink className={({isActive})=>isActive?
            `flex items-center text-sm gap-1 text-[#7EA1FF] `:`flex items-center text-sm gap-1 hover:text-[#7EA1FF]`} to={'/'}><BsPeople />Manage Member</NavLink>
            <NavLink className={({isActive})=>isActive?
            `flex items-center text-sm gap-1 text-[#7EA1FF] `:`flex items-center text-sm gap-1 hover:text-[#7EA1FF]`} to={'/dashboard/Make-Announcement'}><TfiAnnouncement />Make Announcement</NavLink>
            <NavLink className={({isActive})=>isActive?
            `flex items-center text-sm gap-1 text-[#7EA1FF] `:`flex items-center text-sm gap-1 hover:text-[#7EA1FF]`} to={'/dashboard/Agreement-Request'}><FiFile />Agreement Requests</NavLink>
            <NavLink className={({isActive})=>isActive?
            `flex items-center text-sm gap-1 text-[#7EA1FF] `:`flex items-center text-sm gap-1 hover:text-[#7EA1FF]`} to={'/'}><RiCoupon2Fill />Manage Coupons</NavLink>
        </>
    );
};

export default AdminRoutes;