import useAuth from "../../../Hooks/useAuth";
import { SiFirebase } from "react-icons/si";
import useRole from "../../../Hooks/useRole";
import { BiUser } from "react-icons/bi";



const ProfileUser = () => {

    const { user = {} } = useAuth();
    const [role] = useRole();
    console.log(role)




    return (
        <div className="p- max-w-6xl mx-auto">



            <div className="flex items-center min-h-[60vh] gap-8 p-14">

                {/* profile */}
                <div className="w-1/2">
                    <h1 className="text-2xl font-bold pb-4 text-start pl-2 uppercase "><span className="text-[#E49BFF]">PROFILE</span></h1>
                    <div className="p-8 flex flex-col items-center md:flex-row gap-5 shadow-lg rounded-lg border">
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


                <div className="w-1/2">

                </div>

            </div>

        </div>
    );
};

export default ProfileUser;