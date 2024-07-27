import { NavLink } from "react-router-dom";
import { BsPeople } from "react-icons/bs";
import { FiFile } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { RiCoupon2Fill } from "react-icons/ri";
import { TfiAnnouncement } from "react-icons/tfi";

const AdminRoutes = () => {
    return (
        <>
            <NavLink  data-aos="fade-right" data-aos-duration="2000" 
             className={({isActive})=>isActive?
            `flex items-center text-sm gap-1 text-[#7EA1FF] `:`flex items-center text-sm gap-1 hover:text-[#7EA1FF]`} to={'/dashboard/admin-Profile'}><ImProfile /> <span className="hidden lg:block">Admin Profile</span></NavLink>
            <NavLink data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200"
            className={({isActive})=>isActive?
            `flex items-center text-sm gap-1 text-[#7EA1FF] `:`flex items-center text-sm gap-1 hover:text-[#7EA1FF]`} to={'/dashboard/manage-Member'}><BsPeople /><span className="hidden lg:flex">Manage Member </span></NavLink>
            <NavLink data-aos="fade-right" data-aos-duration="2000" data-aos-delay="400"
            className={({isActive})=>isActive?
            `flex items-center text-sm gap-1 text-[#7EA1FF] `:`flex items-center text-sm gap-1 hover:text-[#7EA1FF]`} to={'/dashboard/Make-Announcement'}><TfiAnnouncement /> <span className="hidden lg:flex">Make Announcement</span></NavLink>
            <NavLink data-aos="fade-right" data-aos-duration="2000" data-aos-delay="600"
            className={({isActive})=>isActive?
            `flex items-center text-sm gap-1 text-[#7EA1FF] `:`flex items-center text-sm gap-1 hover:text-[#7EA1FF]`} to={'/dashboard/Agreement-Request'}><FiFile /><span className="hidden lg:flex">Agreement Requests</span></NavLink>
            <NavLink data-aos="fade-right" data-aos-duration="2000" data-aos-delay="800"
            className={({isActive})=>isActive?
            `flex items-center text-sm gap-1 text-[#7EA1FF] `:`flex items-center text-sm gap-1 hover:text-[#7EA1FF]`} to={'/dashboard/coupon'}><RiCoupon2Fill /><span className="hidden lg:flex">Manage Coupons</span></NavLink>
        </>
    );
};

export default AdminRoutes;