import { useQuery } from "@tanstack/react-query";
import CommonUrl from "./CommonUrl";
import useAuth from "./useAuth";

const useRole = () => {
    const axiosUrl=CommonUrl();
    const {user}=useAuth();

    const {data=[],isPending}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const data=await axiosUrl('/users');
            return data.data
        }
    })
    const currentUser=data?.find(Data=>Data?.email===user?.email)
    const role=currentUser?.userRole
    return [role,isPending]
};

export default useRole;