import { NavLink } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { GrAnnounce } from "react-icons/gr";



const UserRoutes = () => {
    return (
        <>
            <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'}
             to={'/dashboard/userProfile'}><TiHomeOutline />My Profile</NavLink>
            <NavLink className={'flex items-center text-sm gap-1 hover:text-[#7EA1FF]'}
            to={'/dashboard/Announcement'}><GrAnnounce />Announcement</NavLink>

        </>
    );
};

export default UserRoutes;