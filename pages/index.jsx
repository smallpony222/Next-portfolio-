import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Skills from "../components/HomeComponents/Skills/Skills";
import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
const home = () => {
    return (
        <div className="Home-Page -z-10">
            <Banner />
            <MyExpertise />
            <Skills/>
            {/* <Recommendations /> */}
            {/* <ClientReviews /> */}
            <Footer />

        </div>
    )
}

export default home