// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './css.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
   
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bg-[url('/b4.png')] min-h-screen  bg-no-repeat bg-cover bg " style={{ "clip-path": "polygon(0 0, 100% 0%, 100% 80%, 50% 100%, 0 80%)" }}>

                        <div className='bg-gradient-to-r from-[#00000066] to-[#00000066] min-h-screen '>
                            <div className='flex flex-col items-center justify-center min-h-[75vh]'>
                                <h1 className='text-3xl text-white'>____More details____</h1>
                                <p className='text-white text-center text-xl md:text-5xl font-black font-serif text-balance'>Good management consists in <br />showing average people how to do <br /> the work of superior people.</p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-[url('/b2.jpg')] min-h-screen  bg-no-repeat bg-cover bg" style={{ "clip-path": "polygon(0 0, 100% 0%, 100% 80%, 50% 100%, 0 80%)" }}>

                        <div className='bg-gradient-to-r from-[#00000066] to-[#00000066] min-h-screen '>
                            <div className='flex flex-col items-center justify-center min-h-[75vh]'>
                                <h1 className='text-3xl text-white'>____More details____</h1>
                                <p className='text-white text-center text-2xl md:text-5xl  font-black font-serif'>Good management consists in <br />showing average people how to do <br /> the work of superior people.</p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-[url('/b5.png')] min-h-screen  bg-no-repeat bg-cover bg" style={{ "clip-path": "polygon(0 0, 100% 0%, 100% 80%, 50% 100%, 0 80%)" }}>

                        <div className='bg-gradient-to-r from-[#00000066] to-[#00000066] min-h-screen '>
                            <div className='flex flex-col items-center justify-center min-h-[75vh]'>
                                <h1 className='text-3xl text-white'>____More details____</h1>
                                <p className='text-white text-center text-2xl md:text-5xl  *: font-black font-serif'>Good management consists in <br />showing average people how to do <br /> the work of superior people.</p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;