import { useQuery } from "@tanstack/react-query";
import CommonUrl from "./CommonUrl";

const UseRooms = () => {
    const axiosUrl=CommonUrl()
   
    const {data=[]}=useQuery({
        queryKey:['rooms'],
        queryFn:async()=>{
          const res=await axiosUrl('/apartment')
          return res.data;
        }
    })

    return [data]
};

export default UseRooms;