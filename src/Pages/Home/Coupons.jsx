import { Typewriter } from "react-simple-typewriter";
import img1 from "../../images/scan.webp"
import img2 from "../../images/s3.png"
import img3 from "../../images/s5.png"
import img4 from "../../images/b6.webp"

const Coupons = () => {



    return (
        <div className="max-w-7xl mx-auto py-12 space-y-10">
            {/* coupon title */}
            <div className='App'>
                <h1 className="text-3xl font-bold text-black text-center" style={{ paddingTop: '5rem', margin: 'auto 0' }}>
                    Best offers {' '}
                    <span style={{ color: 'blue', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['for you', 'for this week', '50% discount','70% discount','25% discount','80% discount']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
            </div>

            {/* coupon ui */}

            <section className="grid md:grid-cols-2 gap-6 mx-4 lg:mx-40">

                <div className=" h-52 flex items-center  gap-8 shadow-2xl border">
                    <div className="text-center pl-8">
                        <h1 className="text-8xl font-bold">50%</h1>
                        <p className="text-3xl ">Coupon sale <br /> limited only</p>
                    </div>
                    <div className="bg-red-200 h-52 w-full rounded-l-3xl pl-8 flex flex-col justify-center p-4 items-center">
                        <img src={img1} />
                        <p className="-mt-2"><span className="text-lg font-bold">Code:</span>99007</p>
                    </div>
                </div>

                <div className=" h-52 flex items-center  gap-8 shadow-2xl border">

                    <div className="bg-[#006266] text-center h-52 w-full rounded-r-3xl pl-8 flex flex-col justify-center p-4 items-center text-white">
                        <h1 className="text-4xl font-bold">Super <br />discount</h1>
                        <p className="text-2xl ">Only selected Item</p>
                    </div>

                    <div className="text-center pr-8 space-y-2">
                        <h1 className="text-4xl font-bold">70% <br />Off</h1>
                        <img src={img2} alt="" />
                    </div>
                </div>

                <div className=" h-52 flex flex-col items-center  gap-5 shadow-2xl border">

                    <div className=" bg-[#ffaf40] p-1 rounded-b-3xl text-center space-y-2 w-full text-white">
                        <h1 className="text-3xl font-bold ">Big sale</h1>
                        <p className="text-2xl font-bold">Up to 25% off</p>
                    </div>

                    <div className="h-full w-full   flex flex-col justify-center items-center">
                        <img src={img3} alt="" className="w-[45%]" />
                        <p className="-mt-2"><span className="text-lg font-bold">Code: </span>ABCD</p>
                    </div>

                </div>

                <div className=" h-52 flex items-center  gap-8 shadow-2xl border">
                    <div className="text-center pl-8">
                    <img src={img4} className="px-4"/>
                        <p className="-mt-2"><span className="text-lg font-bold">Code:</span>99557</p>
                    </div>

                    <div className="bg-[#a5b1c2] text-white text-center h-52 w-full rounded-l-3xl pl-8 flex flex-col justify-center p-4 items-center">
                       
                        <h1 className="text-5xl font-bold">Super sale</h1>
                        <p className="text-2xl font-bold">80% off</p>
                    </div>
                </div>

            </section>




        </div>
    );
};

export default Coupons;