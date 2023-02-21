function Banner(props){
    return (
        <div className="banner__container">
            <img className="banner__image" src={props.image} alt={props.altText}/>
            <div className="banner__container__overlay"></div>
            <div className="banner__container__text">
                <p>{props.text ? props.text : ""}</p>
            </div>
        </div>
    )
}

export default Banner;