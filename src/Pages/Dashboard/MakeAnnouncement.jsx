
import toast from 'react-hot-toast';
import CommonUrl from '../../Hooks/CommonUrl';
import './announcement.css'




import { TfiAnnouncement } from 'react-icons/tfi';
const MakeAnnouncement = () => {
    const axiosUrl = CommonUrl()


    const handleAnnouncement = function (e) {
        e.preventDefault()
        const title = e.target.title.value;
        const description = e.target.description.value;
        axiosUrl.post('/announcement', { title, description })
            .then(data => {
                if (data.data.insertedId) {
                    toast.success('Announcement sended')
                    e.target.reset()
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
    }



    return (
        <div className="px-20 md:px-80 lg:px-0 flex flex-col md:flex-row items-center  gap-0">
            <div className="lg:w-1/2 min-h-[calc(100vh-56px)]" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2500">
                {/* form */}
                <div className="flex items-center max-w-sm mx-auto justify-center text-center ">
                    <form className="flex flex-col justify-center w-full  min-h-[75vh] space-y-3" onSubmit={handleAnnouncement}>
                        <h1 className='md:text-3xl font-serif flex items-center gap-1'>Announcement<TfiAnnouncement /></h1>
                        <label className="self-start mt-3 text-xs font-semibold">Title</label>
                        <input type="text" name='title' className="flex items-center h-12 px-4 mt-2 rounded border border-black" placeholder='Title' required />
                        <label className="self-start mt-3 text-xs font-semibold">Description</label>
                        <textarea name='description' className="border px-2 pt-1 rounded border-black mt-2" cols={25} rows={5} placeholder="Description" required></textarea>
                        <button type="submit" className="btn btn-block bg-[#7EA1FF] text-white">Submit</button>
                    </form>
                </div>

            </div>

            <div data-aos="fade-left" data-aos-duration="3000" data-aos-delay="500"
             className=" lg:w-1/2 bg-[#E49BFF] min-h-[calc(100vh-56px)] bg hidden lg:flex justify-center items-center">
                <img width="150" height="200" className='bg-opacity-100' src="https://img.icons8.com/external-becris-lineal-color-becris/64/external-announcement-business-consultant-becris-lineal-color-becris.png" alt="external-announcement-business-consultant-becris-lineal-color-becris" />
            </div>

        </div>
    );
};

export default MakeAnnouncement;
