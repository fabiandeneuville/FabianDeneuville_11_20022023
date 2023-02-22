import Card from "./Card";

function CardsContainer(props){
    return (
        <main className="cards__container">
            {props.list.map((item) => {
                return (
                    <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    imageUrl={item.cover}
                    />
                )           
            })}
        </main>
    )
}

export default CardsContainer;