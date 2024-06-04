import { BsGoogle, BsTwitter } from "react-icons/bs";
import { GrLinkNext } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {

    const { Google } = useAuth();


    const handleGoogle = () => {
        Google()
            .then(result => {
                if (result.user) toast.success('Login successful')
            })
            .catch(error => toast.error(error.message))
    }




    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="mx-4 md:w-[60%] min-h-[75vh] flex flex-col items-center text-center p-12 shadow-2xl border">
                <h1 className="text-4xl font-serif pb-3">Welcome back</h1>
                <p className="text-base">Login and enjoy the best  features <br /> of our website</p>

                <div className="my-6 space-y-4 flex flex-col items-center">

                    <Link className="bg-[#7EA1FF] btn flex  items-center  focus:ring-2 focus:ring-offset-1 w-72 text-white pl-2" to={'/emailLogin'}>
                        <MdEmail className="text-3xl" />
                        <p>Login with Email</p>
                    </Link>

                    <button className="bg-[#7EA1FF] btn flex  items-center  focus:ring-2 focus:ring-offset-1 w-72 text-white" onClick={handleGoogle}>
                        <BsGoogle className="text-2xl" />
                        <p>Login with Google</p>
                    </button>

                    <button className="bg-[#7EA1FF] btn flex  items-center  focus:ring-2 focus:ring-offset-1 w-72 text-white " title="Coming soon">
                        <BsTwitter className="text-2xl" />
                        <p>Login with Twitter</p>
                    </button>

                    <p className="flex items-center gap-2">No account ?
                        <Link className="text-red-500 flex items-center gap-1" to={'/register'}>Create one <GrLinkNext className="mt-1" /></Link></p>

                    <p className="max-w-60 text-balance">
                        Login is the process of accessing an existing account on a system or platform, while signup is the initial creation of a new account.
                    </p>

                </div>

            </div>
        </div>
    );
};

export default Login;