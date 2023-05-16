import "./Specials.css";
import Card from "./Card";
import salad from "../../assets/1.png";
import bruschetta from "../../assets/2.png";
import lemonDessert from "../../assets/3.png";

const Specials = () => {
  return (
    <div className="specials" id = "specials">
      <div className="container div1">
        <h1>Specials!</h1>
        <button>Order Online</button>
        
      </div>
      <div className="container div2">
      <Card
          image={salad}
          name="Greek Salad"
          price="$14"
          description="Lorem  elit felis cursus sit sagittis. Commodo elit dictum facilisi gravida elementum quis felis scelerisque tincidunt........"
        />
        <Card
          image={bruschetta}
          name="Bruschetta"
          price="$56"
          description="Lorem  elit felis cursus sit sagittis. Commodo elit dictum facilisi gravida elementum quis felis scelerisque tincidunt........"
        />
        <Card
          image={lemonDessert}
          name="Lemon Dessert"
          price="$5"
          description="Lorem  elit felis cursus sit sagittis. Commodo elit dictum facilisi gravida elementum quis felis scelerisque tincidunt........"
        />
      </div>
    </div>
  );
};
export default Specials;
