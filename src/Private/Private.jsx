import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { HashLoader } from "react-spinners";


const Private = ({children}) => {
    const location=useLocation();
    const {user,loading}=useAuth();
    
    if(loading)return <div className="flex items-center justify-center min-h-[52vh]"><HashLoader color="#E49BFF" /></div>

    if (user) {
        return children
    }

    return <Navigate to={'/login'} state={location.pathname} replace/> 
};

export default Private;