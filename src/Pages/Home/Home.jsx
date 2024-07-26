import TopInfo from "../../Components/TopInfo";
import Banner from "./Banner";
import Building from "./Building";
import Coupons from "./Coupons";
import OurApartment from "./OurApartment";

const Home = () => {
    return (
        <div className="text-white">
            <Banner />
            <Building/>
            <TopInfo/>
            <Coupons/>
            <OurApartment/>
        </div>
    );
};

export default Home;