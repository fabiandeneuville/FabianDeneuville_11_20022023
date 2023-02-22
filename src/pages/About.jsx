import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

import aboutBanner from '../assets/images/about-banner.png';

function About(){
    return (
        <div className="page">
            <Header/>
            <Banner
            image={aboutBanner}
            altText={"Paysage de montagne"}
            />
            <Footer/>
        </div>
    )
}

export default About;