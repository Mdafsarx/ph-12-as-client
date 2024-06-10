import { BiUser } from "react-icons/bi";
import useAuth from "../../Hooks/useAuth";
import { SiFirebase } from "react-icons/si";
import useRole from "../../Hooks/useRole";
import { MdApartment, MdCardMembership, MdEventAvailable } from "react-icons/md";
import { CgUnavailable } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import UseRooms from "../../Hooks/UserRooms";
import useAvailable from "../../Hooks/useAvailable";
import useUser from "../../Hooks/useUser";

const AdminProfile = () => {

    const { user } = useAuth();
    const [role] = useRole();
    const [users]=useUser();
    const member=users.filter(User=>User.userRole==='member')
    const [rooms] = UseRooms();
    const [AvailableRooms,Unavailable]=useAvailable();

    return (
        <div className="px-14 p-2 md:p-20 max-w-5xl mx-auto space-y-10 ">

            <div >
                <h1 className="text-2xl font-bold pb-4 text-center pl-2 uppercase "><span className="text-[#E49BFF]">PROFILE</span></h1>
                <div className="p-8 flex flex-col items-center md:flex-row gap-5 shadow-lg rounded-2xl border" data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500">
                    <div>
                        <img src={user?.photoURL} className="rounded-lg size-36" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                    <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                </svg>
                                <span className="">{user?.email}</span>
                            </span>
                            <span className="flex items-center space-x-2">
                                <SiFirebase />
                                <span className="">{user?.providerId}</span>
                            </span>
                            <span className="flex items-center space-x-2">
                                <span className="font-bold">Type:</span>
                                <span className="flex items-center"><BiUser />{role}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* website details */}
            <div className="grid md:grid-cols-5 gap-10">


                <div data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="1000"
                 className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl h-44 flex flex-col items-center justify-center">
                    <MdApartment className="text-8xl text-white" />
                    <div className="text-center ">
                        <p className="text-2xl font-bold">{rooms?.length}</p>
                        <p>Rooms</p>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="1500"
                 className="bg-gradient-to-r from-pink-400 to-red-500 rounded-2xl h-44 flex flex-col items-center justify-center">
                    <MdEventAvailable className="text-8xl text-white" />
                    <div className="text-center ">
                        <p className="text-2xl font-bold">{AvailableRooms}</p>
                        <p>Available rooms</p>
                    </div>
                </div>


                <div data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="2000"
                 className="bg-gradient-to-r from-gray-400 to-gray-300 rounded-2xl h-44 flex flex-col items-center justify-center">
                    <CgUnavailable className="text-8xl text-white" />
                    <div className="text-center ">
                        <p className="text-2xl font-bold">{((Unavailable?.length / rooms.length ) *100 ).toFixed(2)}%</p>
                        <p>Unavailable rooms</p>
                    </div>
                </div>


                <div data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="2500"
                 className="bg-gradient-to-r from-amber-500 to-yellow-300 rounded-2xl h-44 flex flex-col items-center justify-center">
                    <FaUsers className="text-8xl text-white" />
                    <div className="text-center ">
                        <p className="text-2xl font-bold">{users?.length}</p>
                        <p>Users</p>
                    </div>
                </div>


                <div data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="3000"
                className="bg-gradient-to-r from-purple-500 to-purple-800 rounded-2xl h-44 flex flex-col items-center justify-center">
                    <MdCardMembership className="text-8xl text-white" />
                    <div className="text-center ">
                        <p className="text-2xl font-bold">{member?.length}</p>
                        <p>members</p>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default AdminProfile;