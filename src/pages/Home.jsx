import Header from '../components/Header';
import Banner from '../components/Banner';

import homeBanner from '../assets/images/home-banner.png';

function Home(){
    return (
        <div>
            <Header/>
            <Banner
            image={homeBanner}
            altText={"Cote boisée et montagneuse"}
            text={"Chez vous, partout et ailleurs"}
            />
        </div>
    )
}

export default Home;