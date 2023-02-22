import { Link } from "react-router-dom";

function Card(props){
    return (
        <Link to={`/fiche-hebergement/${props.id}`} className="card">
            <img className="card__cover" src={props.imageUrl} alt={props.title} />
            <div className="card__overlay"></div>
            <p className="card__text">{props.title}</p>
        </Link>
    )
}

export default Card;