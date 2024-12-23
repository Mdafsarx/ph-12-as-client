import { NavLink } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { GrAnnounce } from "react-icons/gr";
import { useSelector } from "react-redux";



const UserRoutes = () => {

    const isOpen = useSelector(state => state.open.value)

    return (
        <div className="space-y-3">
            <NavLink to={'/dashboard/user-Profile'} className={({ isActive }) => isActive ? `bg-gradient-to-r from-[#E49BFF66]  via-[#7EA1FF66]  to-[#7EA1FFCC] hover:scale-105 hover:duration-300 shadow-sm rounded-md flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}` : `flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}`}>
                <TiHomeOutline className="text-lg"/>  {isOpen && 'Profile'}
            </NavLink>


            <NavLink to={'/dashboard/Announcement'} className={({ isActive }) => isActive ? `bg-gradient-to-r from-[#E49BFF66]  via-[#7EA1FF66]  to-[#7EA1FFCC] hover:scale-105 hover:duration-300 shadow-sm rounded-md flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}` : `flex items-center gap-x-2  p-1.5 ${isOpen && 'pl-2.5'}`}>
                <GrAnnounce className="text-lg" />  {isOpen && 'Announcement'}
            </NavLink>
        </div>
    );
};

export default UserRoutes;