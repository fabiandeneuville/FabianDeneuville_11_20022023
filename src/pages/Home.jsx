import Banner from '../components/Banner';
import CardsContainer from '../components/CardsContainer';
import Loader from '../components/Loader';

import homeBanner from '../assets/images/home-banner.png';

import { useState, useEffect } from 'react';

function Home(){

    const [accomodations, setAccomodations] = useState([])
    const [showLoader, setShowLoader] = useState(false)

    useEffect(() => {
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
        fetchAllAccomodations()
    }, [])


    return (
        <div className="page">
            {showLoader && 
                <Loader/>
            }
            <Banner
            image={homeBanner}
            altText={"Cote boisée et montagneuse"}
            text={"Chez vous, partout et ailleurs"}
            />
            <CardsContainer
            list={accomodations}
            />
        </div>
    )
}

export default Home;