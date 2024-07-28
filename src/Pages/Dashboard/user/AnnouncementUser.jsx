import { useQuery } from "@tanstack/react-query";
import CommonUrl from "../../../Hooks/CommonUrl";

const AnnouncementUser = () => {
    const axiosUrl = CommonUrl()

    const { data = [] } = useQuery({
        queryKey: ['announcement'],
        queryFn: async () => {
            const res = await axiosUrl('/announcement');
            return res.data
        }
    })




    return (
        <div className="p-10 max-w-6xl mx-auto text-black"  >
            <div>
                <h1 className="text-lg md:text-3xl text-[#E49BFF] font-bold text-center">Announcement</h1>

                <div className="grid md:grid-cols-2 gap-10 mt-4 md:my-14">

                    {
                        data?.map(Data => <div key={Data?._id} className="card  bg-base-100 shadow-xl border" data-aos="zoom-in" data-aos-duration="2000">
                            <div className="p-1.5 md:p-4" >
                                <h1 className="text-2xl font-bold text-center border-b border-black mb-2">{Data.title}</h1>
                                <p className=""><span className="font-bold">Description: </span>{Data?.description}</p>
                            </div>
                        </div>
                        )
                    }



                </div>



            </div>
        </div>
    );
};

export default AnnouncementUser;