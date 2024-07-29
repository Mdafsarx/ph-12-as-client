import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import useRole from "../Hooks/useRole";

const MemberAndUser = ({children}) => {

    const [role,isPending]=useRole();
    const location=useLocation();

    if(isPending){
        return <div className="hidden md:flex items-center justify-center min-h-[51.9vh]">
            <HashLoader color="#E49BFF" />
            </div>
    }

    if(role==='user'||role==='member'){
        return children
    }
    return <Navigate to={'/login'} state={location.pathname}/>
};

export default MemberAndUser;