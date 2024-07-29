import { useQuery } from "@tanstack/react-query";
import CommonUrl from "../../Hooks/CommonUrl";
import Swal from "sweetalert2";

const ManageMember = () => {
    const axiosUrl = CommonUrl();

    const { data = [] ,refetch} = useQuery({
        queryKey: ['manage-Member'],
        queryFn: async () => {
            const res = await axiosUrl('/users')
            return res.data;
        }
    })

    const member=data.filter(data=>data.userRole==='member');
    const handleRemove=(email)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#7EA1FF",
            cancelButtonColor: "#E49BFF",
            confirmButtonText: "Yes, remove from member!"
          }).then((result) => {
            if (result.isConfirmed) {

              axiosUrl.put(`/user?email=${email}`,{Role:'user'},{headers:{authorization:localStorage.getItem('token')}})
              .then(data=>{
                if(data.data.modifiedCount){
                    Swal.fire({
                        title: "Removed!",
                        text: "",
                        icon: "success"
                      });
                }
                refetch()
              })
            }
          });
    }
    
    



    return (
        <div className="py-5 flex flex-row md:flex-col justify-center w-[85vw] md:w-auto ">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="hidden md:flex"></th>
                            <th className="text-[#7EA1FF] hidden md:flex">Name</th>
                            <th className="text-[#7EA1FF]">Email</th>
                            <th className="text-[#7EA1FF]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {member?.map((Data,i)=> <tr key={i}>
                            <th className="hidden md:table-cell whitespace-nowrap">{i+1}</th>
                            <td className="hidden md:table-cell whitespace-nowrap">{Data.name}</td>
                            <td className="text-xs md:text-sm">{Data.email}</td>
                            <td><button className="btn btn-sm bg-[#E49BFF] text-white border-0 hover:bg-[#7EA1FF] hover:text-black" onClick={()=>handleRemove(Data?.email)}>Remove</button></td>
                        </tr>)}
                       
                   
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMember;