import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import person1 from "../../assets/person1.png";
const Testimonials = () => {
  return (
    <div className="testimonials">
        <h1>Testimonials</h1>
      <div className="container">
        <TestimonialCard
          number={4}
          image={person1}
          comment="Lorem ipsum dolor sit amet consectetur. Rhoncus sed ornare id viverra nulla.."
        />
        <TestimonialCard
          number={4}
          image={person1}
          comment="Lorem ipsum dolor sit amet consectetur. Rhoncus sed ornare id viverra nulla.."
        />
        <TestimonialCard
          number={4}
          image={person1}
          comment="Lorem ipsum dolor sit amet consectetur. Rhoncus sed ornare id viverra nulla.."
        />
        <TestimonialCard
          number={4}
          image={person1}
          comment="Lorem ipsum dolor sit amet consectetur. Rhoncus sed ornare id viverra nulla.."
        />
      </div>
    </div>
  );
};

export default Testimonials;
