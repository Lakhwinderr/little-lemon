import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.jpg";
import person3 from "../../assets/person3.jpg";
import person4 from "../../assets/person4.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials">
        <h1>Testimonials</h1>
      <div className="container">
        <TestimonialCard
          number={4}
          image={person1}
          name="John Doe"
          comment="Lorem ipsum dolor sit amet consectetur. Rhoncus sed ornare id viverra nulla.."
        />
        <TestimonialCard
          number={4}
          image={person2}
          name="Jane Smith"
          comment="Lorem ipsum dolor sit amet consectetur. Rhoncus sed ornare id viverra nulla.."
        />
        <TestimonialCard
          number={4}
          image={person3}
          name="Alice"
          comment="Lorem ipsum dolor sit amet consectetur. Rhoncus sed ornare id viverra nulla.."
        />
        <TestimonialCard
          number={4}
          image={person4}
          name="Bob Brown"
          comment="Lorem ipsum dolor sit amet consectetur. Rhoncus sed ornare id viverra nulla.."
        />
      </div>
    </div>
  );
};

export default Testimonials;
