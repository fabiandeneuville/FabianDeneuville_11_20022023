import Header from '../components/Header';
import Banner from '../components/Banner';

import aboutBanner from '../assets/images/about-banner.png';

function About(){
    return (
        <div>
            <Header/>
            <Banner
            image={aboutBanner}
            altText={"Paysage de montagne"}
            />
        </div>
    )
}

export default About;