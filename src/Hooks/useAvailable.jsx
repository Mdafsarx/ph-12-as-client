import { useQuery } from "@tanstack/react-query";
import CommonUrl from "./CommonUrl";
import UseRooms from "./UserRooms";

const useAvailable = () => {

    const axiosUrl=CommonUrl();
    const [rooms]=UseRooms()
   
    const {data=[]}=useQuery({
        queryKey:['agreement'],
        queryFn:async()=>{
          const res=await axiosUrl('/agreement')
          return res.data;
        }
    })

    return [rooms.length-data?.length,data]
};

export default useAvailable;