import Banner from "../Banner/Banner";
import Details from "../Details/Details";
import Faq from "../Faq/Faq";
import Partners from "../Partners/Partners";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Details></Details>
            <Partners></Partners>
            <Faq></Faq>
        </div>
    );
};

export default Home;