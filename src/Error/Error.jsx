import { Link } from 'react-router-dom';
import img1 from '../../src/images/error.png'

const Error = () => {
    return (
        <div>
            <section className="flex items-center min-h-[90vh]  text-black">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                    <img src={img1} alt="" />
                    <p className="text-3xl">The page you're looking for can't be found.</p>
                    <Link to={'/'} className="px-8 py-3 font-semibold rounded text-white btn bg-black">Back to homepage</Link>
                </div>
            </section>
        </div>
    );
};

export default Error;