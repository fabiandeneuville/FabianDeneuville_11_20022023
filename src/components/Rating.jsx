import fullStar from '../assets/images/fullStar.svg';
import emptyStar from '../assets/images/emptyStar.svg';

function Rating(props){

    return (
        <div className="rating">
            {
                new Array(5).fill().map((item, index) => {
                    return (
                        <img
                        key={index}
                        className="rating__star"
                        src={index + 1 > props.rating ? emptyStar : fullStar}
                        alt="Etoile"
                        />
                    )
                })
            }
        </div>
    )
}

export default Rating;