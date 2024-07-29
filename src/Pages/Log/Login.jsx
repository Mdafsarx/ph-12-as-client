import { BsGoogle, BsTwitter } from "react-icons/bs";
import { GrLinkNext } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import CommonUrl from "../../Hooks/CommonUrl";
// import CommonUrl from "../../Hooks/CommonUrl";

const Login = () => {
    const location=useLocation();
    const navLink=useNavigate()
    const { Google } = useAuth();
    const axiosUrl=CommonUrl();




    const handleGoogle = () => {
        Google()
            .then(result => {
                if (result.user) {
                    // console.log(result.user.photoURL)
                   axiosUrl.post('/user',{name:result.user.displayName,email:result.user.email,photo:result.user.photoURL,userRole:'user'})
                   .then(data=>{
                    if(data.data.insertedId || data.data.message){
                        toast.success('Login successful')
                        navLink(location.state || '/')
                    }
                   }).catch(error=>toast.error(error))
                }
            })
            .catch(error => toast.error(error.message))
    }




    return (
        <div className="flex justify-center min-h-screen items-center" data-aos="zoom-in" data-aos-duration="2000"  data-aos-delay="500">
            <div className="px-4 md:w-[60%] md:min-h-[75vh] flex flex-col items-center justify-center text-center p-6 md:p-12 shadow-2xl border rounded-md">
                <h1 className="text-2xl md:text-4xl font-serif pb-0">Welcome back</h1>
                <p className="text-sm md:text-base">Login and enjoy the best  features <br /> of our website</p>

                <div className="mt-4 space-y-4 flex flex-col items-center">

                    <Link className="bg-[#7EA1FF] btn flex  items-center  focus:ring-2 focus:ring-offset-1 md:w-72 text-white border-0 pl-2 hover:bg-[#E49BFF] hover:text-black" to={'/emailLogin'}>
                        <MdEmail className="text-3xl" />
                        <p>Login with Email</p>
                    </Link>

                    <button className="bg-[#7EA1FF] btn flex  items-center  focus:ring-2 focus:ring-offset-1 md:w-72 text-white border-0 hover:bg-[#E49BFF] hover:text-black" onClick={handleGoogle}>
                        <BsGoogle className="text-2xl" />
                        <p>Login with Google</p>
                    </button>

                    <button className="bg-[#7EA1FF] btn flex  items-center  focus:ring-2 focus:ring-offset-1 md:w-72 text-white border-0 hover:bg-[#E49BFF] hover:text-black" title="Coming soon">
                        <BsTwitter className="text-2xl" />
                        <p>Login with Twitter</p>
                    </button>

                </div>
                    <p className="flex items-center gap-2 pt-3">No account ?
                        <Link className="text-red-500 flex items-center gap-1" to={'/register'}>Create one <GrLinkNext className="mt-1" /></Link></p>

                    <p className="max-w-60 text-balance hidden md:flex">
                        Login is the process of accessing an existing account on a system or platform, while signup is the initial creation of a new account.
                    </p>

            </div>
        </div>
    );
};

export default Login;