import Tag from "./Tag"

function TagsContainer(props){
    return (
        <div className="tags__container">
            {props.tagsList.map((tag, index) => {
                return (
                    <Tag
                    key={index}
                    text={tag}
                    />
                )
            })}
        </div>
    )
}

export default TagsContainer;