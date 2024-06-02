import TopInfo from "../../Components/TopInfo";
import Banner from "./Banner";
import Building from "./Building";
import Coupons from "./Coupons";
import OurApartment from "./OurApartment";

const Home = () => {
    return (
        <div>
            <Banner />
            <Building/>
            <Coupons/>
            <TopInfo/>
            <OurApartment/>
        </div>
    );
};

export default Home;