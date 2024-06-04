import { BiPhotoAlbum } from "react-icons/bi";
import { GrLinkNext } from "react-icons/gr";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {

    const { registerUser, updateUser } = useAuth();
    const location=useLocation()
    const navLink=useNavigate()

    async function handleRegister(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.file.files[0];
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(image)
        const formData = new FormData()
        formData.append('image', image)
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`, formData)
        registerUser(email, password)
            .then(result => {
                if (result.user) {
                    updateUser(name, res.data.data.display_url)
                        .then(() => {
                            toast.success('Register successful');
                            navLink(location.state || '/')
                        }).catch(error => toast.error(error.message))
                }
            })
            .catch(error => {
                toast.error(error.message)
            })

    }

    // Update user for photo and name 
    // image hosting 




    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="px-8 md:px-0 md:w-[60%] min-h-[75vh] flex flex-col items-center text-center p-12 shadow-2xl border">
                <h1 className="text-4xl font-serif pb-3">Welcome back</h1>
                <p className="text-base">Register and enjoy the best  features <br /> of our website</p>

                <div className="my-6 space-y-4 flex flex-col items-center">


                    <div>
                        <form className="space-y-2" onSubmit={handleRegister}>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" name="name" className="grow" placeholder="Username" required />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <BiPhotoAlbum />
                                <input type="file" name="file" className="grow" placeholder="Username" required />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="email" name="email" className="grow" placeholder="Email" required />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" name="password" className="grow" placeholder="Password" required />
                            </label>
                            <button className="btn bg-[#7EA1FF] text-white btn-block font-bold">Create Account</button>
                        </form>
                    </div>


                    <p className="flex items-center gap-2">Already have an account?
                        <Link className="text-red-500 flex items-center gap-1" to={'/login'}>Login <GrLinkNext className="mt-1" /></Link></p>

                    <p className="max-w-60 text-balance">
                        Login is the process of accessing an existing account on a system or platform, while signup is the initial creation of a new account.
                    </p>

                </div>

            </div>
        </div>
    );
};

export default Register;