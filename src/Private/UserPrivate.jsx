import { Navigate, useLocation } from "react-router-dom";
import useRole from "../Hooks/useRole";
import { HashLoader } from "react-spinners";

const UserPrivate = ({ children }) => {

    const [role, isPending] = useRole();
    const location = useLocation()
    if (isPending) return <div className="flex items-center justify-center min-h-[51.9vh]"><HashLoader color="#E49BFF" /></div>

    if (role === 'user') {
        return children
    }
    return <Navigate to={'/login'} state={location.pathname} />
};

export default UserPrivate;