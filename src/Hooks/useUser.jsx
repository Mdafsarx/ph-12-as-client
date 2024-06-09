import { useQuery } from "@tanstack/react-query";
import CommonUrl from "./CommonUrl";

const useUser = () => {
    const axiosUrl=CommonUrl();

    const {data=[]}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const data=await axiosUrl('/users');
            return data.data
        }
    })
    return [data]
};

export default useUser;