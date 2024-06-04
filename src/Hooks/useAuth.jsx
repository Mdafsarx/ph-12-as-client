import { useContext } from "react";
import { AuthContext } from "../Auth/Auth";

const useAuth = () => {
    const auth=useContext(AuthContext)
    return auth;
};

export default useAuth;