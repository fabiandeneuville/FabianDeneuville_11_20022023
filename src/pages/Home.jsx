import Header from '../components/Header';
import Banner from '../components/Banner';
import CardsContainer from '../components/CardsContainer';
import Footer from '../components/Footer';

import homeBanner from '../assets/images/home-banner.png';

import { useState, useEffect } from 'react';

function Home(){

    const [accomodations, setAccomodations] = useState([])

    useEffect(() => {
        fetch('./datas.json')
        .then((response) => response.json())
        .then((datas) => setAccomodations(datas))
        .catch((error) => console.log(error))
    }, [])

    return (
        <div className="page">
            <Header/>
            <Banner
            image={homeBanner}
            altText={"Cote boisée et montagneuse"}
            text={"Chez vous, partout et ailleurs"}
            />
            <CardsContainer
            list={accomodations}
            />
            <Footer/>
        </div>
    )
}

export default Home;