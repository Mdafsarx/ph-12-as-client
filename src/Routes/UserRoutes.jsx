import { NavLink } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { GrAnnounce } from "react-icons/gr";



const UserRoutes = () => {
    return (
        <>
            <NavLink data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200"
                className={({ isActive }) => isActive ?
                    `flex items-center text-sm gap-1 text-[#7EA1FF] ` : `flex items-center text-sm gap-1 hover:text-[#7EA1FF]`}
                to={'/dashboard/user-Profile'}><TiHomeOutline /><span className="hidden lg:block">My Profile</span></NavLink>
            <NavLink data-aos="fade-right" data-aos-duration="2000" data-aos-delay="400"
                className={({ isActive }) => isActive ?
                    `flex items-center text-sm gap-1 text-[#7EA1FF] ` : `flex items-center text-sm gap-1 hover:text-[#7EA1FF]`}
                to={'/dashboard/Announcement'}><GrAnnounce /><span className="hidden lg:block">Announcement</span></NavLink>
        </>
    );
};

export default UserRoutes;