import './Card.css'
import bike from '../../assets/bike.svg'
const Card = (props) => {
    return <div className="card">
        <img src={props.image} alt="" />
        <h3>{props.name}</h3>
        <h4>{props.price}</h4>
        <p>{props.description}</p>
        <a href="#" className='orderButton'>Order for Delivery
        <img src={bike} alt="bike icon" />
        </a>
        
    </div>
}

export default Card;