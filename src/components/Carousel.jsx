import { useState } from 'react';
import chevronLeft from '../assets/images/chevron-left.png';
import chevronRight from '../assets/images/chevron-right.png';

function Carousel(props){
    
    const [currentPicture, setCurrentPicture] = useState(0);

    function navigate(e){
        if(e.target.getAttribute('data-direction') === "previous" && currentPicture > 0) setCurrentPicture(currentPicture - 1)
        else if (e.target.getAttribute('data-direction') === "previous" && currentPicture === 0) setCurrentPicture(props.pictures.length - 1)
        else if (e.target.getAttribute('data-direction') === "next" && currentPicture < props.pictures.length - 1) setCurrentPicture(currentPicture + 1)
        else if (e.target.getAttribute('data-direction') === "next" && currentPicture === props.pictures.length - 1) setCurrentPicture(0)
        else setCurrentPicture(0)
    }

    return (
        <div className="carousel">
            <img src={props.pictures[currentPicture]} className="picture" alt={props.altText} />
            {props.pictures.length > 1 && 
                <img 
                src={chevronLeft} 
                data-direction="previous" 
                className="previous" 
                role="button" 
                alt="Précédente"
                onClick={(e) => navigate(e)}
                />
            }
            {props.pictures.length > 1 && 
                <img 
                src={chevronRight} 
                data-direction="next" 
                className="next" 
                role="button" 
                alt="Suivante"
                onClick={(e) => navigate(e)}
                />   
            }
            {props.pictures.length > 1 &&
                <div className='picture__count'>
                    {`${currentPicture + 1} / ${props.pictures.length}`}
                </div>
            }
        </div>
    )
}

export default Carousel;