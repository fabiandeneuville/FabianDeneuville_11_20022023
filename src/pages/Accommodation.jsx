import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

import Carousel from '../components/Carousel';
import AccomodationIntro from '../components/AccomodationIntro';
import Rating from '../components/Rating';
import Host from '../components/Host';
import Collapse from '../components/Collapse';
import Loader from '../components/Loader';

function Accomodation(props){
    const { id } = useParams();
    const navigate = useNavigate()
    const [accomodation, setAccomodation] = useState(null);
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        fetchAccomodation(id)
    }, [id])

    const fetchAccomodation = (id) => {
        setShowLoader(true)
        fetch('https://raw.githubusercontent.com/fabiandeneuville/FabianDeneuville_11_20022023/main/public/datas.json')
        .then((response) => response.json())
        .then((datas) => {
            const accomodation = datas.find((item) => item.id === id);
            if(!accomodation){
                navigate('*')
            }
            setAccomodation(accomodation);
            setShowLoader(false)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (

        <div className="page">
            {showLoader &&
                <Loader/>
            }
            {accomodation &&
                <main className="accomodation__page__main">
                    <Carousel
                    pictures={accomodation.pictures}
                    altText={accomodation.title}
                    />
                    <div className="accomodation__heading">
                        <AccomodationIntro
                        title={accomodation.title}
                        location={accomodation.location}
                        tags={accomodation.tags}
                        />

                        <div className="accomodation__heading__aside">
                            <Host
                            name={accomodation.host.name}
                            picture={accomodation.host.picture}
                            />

                            <Rating
                            rating={accomodation.rating}
                            />
                        </div>
                    </div>

                    <div className="accomodation__content">
                        <Collapse
                        heading={"Description"}
                        >
                            <p className="accomodation__content__description">{accomodation.description}</p>
                        </Collapse>
                        <Collapse
                        heading={"Équipements"}
                        >
                            <ul className="accomodation__content__equipment__list">
                                {accomodation.equipments.map((equipment, index) => {
                                    return (
                                        <li 
                                        key={index}
                                        className="accomodation__content__equipment__item"
                                        >
                                            {equipment}
                                        </li>
                                    )
                                })}
                            </ul>
                        </Collapse>
                    </div>
                </main>
            }
        </div>
    )
}

export default Accomodation;