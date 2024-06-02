import TopInfo from "../../Components/TopInfo";
import Banner from "./Banner";
import Building from "./Building";
import Coupons from "./Coupons";
import MyApartment from "./MyApartment";

const Home = () => {
    return (
        <div>
            <Banner />
            <Building/>
            <TopInfo/>
            <Coupons/>
            <MyApartment/>
        </div>
    );
};

export default Home;