import './TestimonialCard.css'
import star from '../../assets/star.svg'
const TestimonialCard = (props) => {
    // console.log(props)
    const count = props.number;
    let stars = [];
    for (let i = 0; i < count; i++) {
      const item = <img  src={star} key={i} alt="icon" />;
      stars.push(item);
    }
    return  <div className="testimonialCard">
        <div className="stars">
        {stars}
        </div>
        <img src={props.image} alt="" />
        <div className="name">
            Lakhwinder
        </div>
        <div className="comment">
        {props.comment}
        </div>
    </div>
}

export default TestimonialCard;