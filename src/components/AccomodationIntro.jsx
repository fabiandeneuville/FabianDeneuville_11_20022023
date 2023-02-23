import TagsContainer from "./TagsContainer";

function AccomodationIntro(props){
    return (
        <div className="accomodation__intro">
            <h2 className="accomodation__intro__title">{props.title}</h2>
            <p className="accomodation__intro__location">{props.location}</p>
            <TagsContainer
            tagsList={props.tags}
            />
        </div>
    )
}

export default AccomodationIntro;