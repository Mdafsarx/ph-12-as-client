import { NavLink } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { GrAnnounce } from "react-icons/gr";



const UserRoutes = () => {
    return (
        <>
            <NavLink className={({ isActive }) => isActive ?
                `flex items-center text-sm gap-1 text-[#7EA1FF] ` : `flex items-center text-sm gap-1 hover:text-[#7EA1FF]`}
                to={'/dashboard/user-Profile'}><TiHomeOutline />My Profile</NavLink>
            <NavLink className={({ isActive }) => isActive ?
                `flex items-center text-sm gap-1 text-[#7EA1FF] ` : `flex items-center text-sm gap-1 hover:text-[#7EA1FF]`}
                to={'/dashboard/Announcement'}><GrAnnounce />Announcement</NavLink>

        </>
    );
};

export default UserRoutes;