const ApartmentBanner = () => {
    return (
        <div>
            <div className="bg-[url('/a6.jpg')] bg-no-repeat bg-cover min-h-[45vh] bg-bottom bg-fixed">
                <div 
                 className='bg-gradient-to-r from-[#0000004D] to-[#00000059] min-h-[45vh] text-white flex flex-col justify-center pl-[15%] space-y-4'>
                       <h4 className="text-xl font-bold"  data-aos="fade-right" data-aos-duration="3000"  data-aos-delay="500">THE ULTIMATE LUXURY</h4>
                       <h1 className="text-5xl font-serif"  data-aos="fade-right" data-aos-duration="3000"  data-aos-delay="2200">Ultimate Apartment</h1>
                </div>
            </div>
        </div>
    );
};

export default ApartmentBanner;