import Header from '../components/Header';
import Banner from '../components/Banner';
import CardsContainer from '../components/CardsContainer';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

import homeBanner from '../assets/images/home-banner.png';

import { useState, useEffect } from 'react';

function Home(){

    const [accomodations, setAccomodations] = useState([])
    const [showLoader, setShowLoader] = useState(false)

    useEffect(() => {
        fetchAllAccomodations()
    }, [])

    const fetchAllAccomodations = () => {
        setShowLoader(true)
        fetch('https://raw.githubusercontent.com/fabiandeneuville/FabianDeneuville_11_20022023/main/public/datas.json')
        .then((response) => response.json())
        .then((datas) => {
            setAccomodations(datas)
            setShowLoader(false)
        })
        .catch((error) => console.log(error))
    }

    return (
        <div className="page">
            {showLoader && 
                <Loader/>
            }
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