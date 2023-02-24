function Host(props){
    return (
        <div className="host">
            <p className="host__name">
                {props.name}
            </p>
            <div className="host__picture">
                <img src={props.picture} alt={`${props.name}`}/>
            </div>
        </div>
    )
}

export default Host;