import "./Hero.css";
import Info from "./Info";
import Button from "./Button";
import restaurantFood from "../../assets/restauranfood.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="infoAndButton">
          <Info />
          <Button />
        </div>
        <img  src={restaurantFood} alt="food image" />
      </div>
    </div>
  );
};

export default Hero;
