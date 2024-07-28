// Import Swiper React components
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import './css.css';



const Banner = () => {

    return (
        <div>
            <Carousel 
             showArrows={true} 
             autoPlay={true} 
             interval={3000} 
             transitionTime={700} 
             dynamicHeight={true} 
            >

                <>

                    <div className="bg-[url('/b4.png')] min-h-screen bg-no-repeat bg-cover  " 
                    style={{
                        clipPath: " polygon(100% 0%, 0% 0% , 0.00% 91.43%, 1.00% 91.25%, 2.00% 90.72%, 3.00% 89.88%, 4.00% 88.78%, 5.00% 87.48%, 6.00% 86.07%, 7.00% 84.64%, 8.00% 83.28%, 9.00% 82.07%, 10.00% 81.09%, 11.00% 80.40%, 12.00% 80.05%, 13.00% 80.05%, 14.00% 80.40%, 15.00% 81.09%, 16.00% 82.07%, 17.00% 83.28%, 18.00% 84.64%, 19.00% 86.07%, 20.00% 87.48%, 21.00% 88.78%, 22.00% 89.88%, 23.00% 90.72%, 24.00% 91.25%, 25.00% 91.43%, 26.00% 91.25%, 27.00% 90.72%, 28.00% 89.88%, 29.00% 88.78%, 30.00% 87.48%, 31.00% 86.07%, 32.00% 84.64%, 33.00% 83.28%, 34.00% 82.07%, 35.00% 81.09%, 36.00% 80.40%, 37.00% 80.05%, 38.00% 80.05%, 39.00% 80.40%, 40.00% 81.09%, 41.00% 82.07%, 42.00% 83.28%, 43.00% 84.64%, 44.00% 86.07%, 45.00% 87.48%, 46.00% 88.78%, 47.00% 89.88%, 48.00% 90.72%, 49.00% 91.25%, 50.00% 91.43%, 51.00% 91.25%, 52.00% 90.72%, 53.00% 89.88%, 54.00% 88.78%, 55.00% 87.48%, 56.00% 86.07%, 57.00% 84.64%, 58.00% 83.28%, 59.00% 82.07%, 60.00% 81.09%, 61.00% 80.40%, 62.00% 80.05%, 63.00% 80.05%, 64.00% 80.40%, 65.00% 81.09%, 66.00% 82.07%, 67.00% 83.28%, 68.00% 84.64%, 69.00% 86.07%, 70.00% 87.48%, 71.00% 88.78%, 72.00% 89.88%, 73.00% 90.72%, 74.00% 91.25%, 75.00% 91.43%, 76.00% 91.25%, 77.00% 90.72%, 78.00% 89.88%, 79.00% 88.78%, 80.00% 87.48%, 81.00% 86.07%, 82.00% 84.64%, 83.00% 83.28%, 84.00% 82.07%, 85.00% 81.09%, 86.00% 80.40%, 87.00% 80.05%, 88.00% 80.05%, 89.00% 80.40%, 90.00% 81.09%, 91.00% 82.07%, 92.00% 83.28%, 93.00% 84.64%, 94.00% 86.07%, 95.00% 87.48%, 96.00% 88.78%, 97.00% 89.88%, 98.00% 90.72%, 99.00% 91.25%, 100.00% 91.43%)",
                        backgroundColor: "lightblue"
                    }}>
                        <div className='bg-gradient-to-r from-[#00000066] to-[#00000066] min-h-screen '>
                            <div className='flex flex-col items-center justify-center min-h-[75vh]'>
                                <h1 className='text-3xl text-white'>____More details____</h1>
                                <p className='text-white text-center text-lg md:text-5xl font-black font-serif text-balance'>Good management consists in <br />showing average people how to do <br /> the work of superior people.</p>
                            </div>
                        </div>
                    </div>

                </>

                <>
                    <div className="bg-[url('/b2.jpg')] min-h-screen  bg-no-repeat bg-cover bg" style={{ 
                         clipPath: " polygon(100% 0%, 0% 0% , 0.00% 91.43%, 1.00% 91.25%, 2.00% 90.72%, 3.00% 89.88%, 4.00% 88.78%, 5.00% 87.48%, 6.00% 86.07%, 7.00% 84.64%, 8.00% 83.28%, 9.00% 82.07%, 10.00% 81.09%, 11.00% 80.40%, 12.00% 80.05%, 13.00% 80.05%, 14.00% 80.40%, 15.00% 81.09%, 16.00% 82.07%, 17.00% 83.28%, 18.00% 84.64%, 19.00% 86.07%, 20.00% 87.48%, 21.00% 88.78%, 22.00% 89.88%, 23.00% 90.72%, 24.00% 91.25%, 25.00% 91.43%, 26.00% 91.25%, 27.00% 90.72%, 28.00% 89.88%, 29.00% 88.78%, 30.00% 87.48%, 31.00% 86.07%, 32.00% 84.64%, 33.00% 83.28%, 34.00% 82.07%, 35.00% 81.09%, 36.00% 80.40%, 37.00% 80.05%, 38.00% 80.05%, 39.00% 80.40%, 40.00% 81.09%, 41.00% 82.07%, 42.00% 83.28%, 43.00% 84.64%, 44.00% 86.07%, 45.00% 87.48%, 46.00% 88.78%, 47.00% 89.88%, 48.00% 90.72%, 49.00% 91.25%, 50.00% 91.43%, 51.00% 91.25%, 52.00% 90.72%, 53.00% 89.88%, 54.00% 88.78%, 55.00% 87.48%, 56.00% 86.07%, 57.00% 84.64%, 58.00% 83.28%, 59.00% 82.07%, 60.00% 81.09%, 61.00% 80.40%, 62.00% 80.05%, 63.00% 80.05%, 64.00% 80.40%, 65.00% 81.09%, 66.00% 82.07%, 67.00% 83.28%, 68.00% 84.64%, 69.00% 86.07%, 70.00% 87.48%, 71.00% 88.78%, 72.00% 89.88%, 73.00% 90.72%, 74.00% 91.25%, 75.00% 91.43%, 76.00% 91.25%, 77.00% 90.72%, 78.00% 89.88%, 79.00% 88.78%, 80.00% 87.48%, 81.00% 86.07%, 82.00% 84.64%, 83.00% 83.28%, 84.00% 82.07%, 85.00% 81.09%, 86.00% 80.40%, 87.00% 80.05%, 88.00% 80.05%, 89.00% 80.40%, 90.00% 81.09%, 91.00% 82.07%, 92.00% 83.28%, 93.00% 84.64%, 94.00% 86.07%, 95.00% 87.48%, 96.00% 88.78%, 97.00% 89.88%, 98.00% 90.72%, 99.00% 91.25%, 100.00% 91.43%)", 
                        }}>
                        <div className='bg-gradient-to-r from-[#00000066] to-[#00000066] min-h-screen '>
                            <div className='flex flex-col items-center justify-center min-h-[75vh]'>
                                <h1 className='text-3xl text-white'>____More details____</h1>
                                <p className='text-white text-center text-lg md:text-5xl  font-black font-serif text-balance'>Good management consists in <br />showing average people how to do <br /> the work of superior people.</p>
                            </div>
                        </div>
                    </div>
                </>

                <>
                    <div className="bg-[url('/b5.png')] min-h-screen  bg-no-repeat bg-cover bg" style={{
                          clipPath: " polygon(100% 0%, 0% 0% , 0.00% 91.43%, 1.00% 91.25%, 2.00% 90.72%, 3.00% 89.88%, 4.00% 88.78%, 5.00% 87.48%, 6.00% 86.07%, 7.00% 84.64%, 8.00% 83.28%, 9.00% 82.07%, 10.00% 81.09%, 11.00% 80.40%, 12.00% 80.05%, 13.00% 80.05%, 14.00% 80.40%, 15.00% 81.09%, 16.00% 82.07%, 17.00% 83.28%, 18.00% 84.64%, 19.00% 86.07%, 20.00% 87.48%, 21.00% 88.78%, 22.00% 89.88%, 23.00% 90.72%, 24.00% 91.25%, 25.00% 91.43%, 26.00% 91.25%, 27.00% 90.72%, 28.00% 89.88%, 29.00% 88.78%, 30.00% 87.48%, 31.00% 86.07%, 32.00% 84.64%, 33.00% 83.28%, 34.00% 82.07%, 35.00% 81.09%, 36.00% 80.40%, 37.00% 80.05%, 38.00% 80.05%, 39.00% 80.40%, 40.00% 81.09%, 41.00% 82.07%, 42.00% 83.28%, 43.00% 84.64%, 44.00% 86.07%, 45.00% 87.48%, 46.00% 88.78%, 47.00% 89.88%, 48.00% 90.72%, 49.00% 91.25%, 50.00% 91.43%, 51.00% 91.25%, 52.00% 90.72%, 53.00% 89.88%, 54.00% 88.78%, 55.00% 87.48%, 56.00% 86.07%, 57.00% 84.64%, 58.00% 83.28%, 59.00% 82.07%, 60.00% 81.09%, 61.00% 80.40%, 62.00% 80.05%, 63.00% 80.05%, 64.00% 80.40%, 65.00% 81.09%, 66.00% 82.07%, 67.00% 83.28%, 68.00% 84.64%, 69.00% 86.07%, 70.00% 87.48%, 71.00% 88.78%, 72.00% 89.88%, 73.00% 90.72%, 74.00% 91.25%, 75.00% 91.43%, 76.00% 91.25%, 77.00% 90.72%, 78.00% 89.88%, 79.00% 88.78%, 80.00% 87.48%, 81.00% 86.07%, 82.00% 84.64%, 83.00% 83.28%, 84.00% 82.07%, 85.00% 81.09%, 86.00% 80.40%, 87.00% 80.05%, 88.00% 80.05%, 89.00% 80.40%, 90.00% 81.09%, 91.00% 82.07%, 92.00% 83.28%, 93.00% 84.64%, 94.00% 86.07%, 95.00% 87.48%, 96.00% 88.78%, 97.00% 89.88%, 98.00% 90.72%, 99.00% 91.25%, 100.00% 91.43%)",
                         }}>

                        <div className='bg-gradient-to-r from-[#00000066] to-[#00000066] min-h-screen '>
                            <div className='flex flex-col items-center justify-center min-h-[75vh]'>
                                <h1 className='text-3xl text-white'>____More details____</h1>
                                <p className='text-white text-center text-lg md:text-5xl  *: font-black font-serif text-balance'>Good management consists in <br />showing average people how to do <br /> the work of superior people.</p>
                            </div>
                        </div>

                    </div>
                </>

            </Carousel>
        </div>
    );
};

export default Banner;