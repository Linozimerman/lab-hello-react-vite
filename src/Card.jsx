import './card.css'

const Card = (props) => {
    return (
        <div className="containerContainer">
            <div className="cardContainer">
                <img src={props.srcUrl} alt={props.h2Id} />
                <h2 >{props.h2Id}</h2>
                <p >{props.pId}</p>
            </div>
        </div>
    )
}

export default Card;