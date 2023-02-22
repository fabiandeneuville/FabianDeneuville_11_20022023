import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

import homeBanner from '../assets/images/home-banner.png';

function Home(){
    return (
        <div className="page">
            <Header/>
            <Banner
            image={homeBanner}
            altText={"Cote boisée et montagneuse"}
            text={"Chez vous, partout et ailleurs"}
            />
            <Footer/>
        </div>
    )
}

export default Home;