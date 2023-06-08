import { useState } from "react";
import logo from "../../assets/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const Header = () => {
  
//   const handleClickScroll = (e) => {
//     routeChange();

//     e.preventDefault();

//     const element = document.getElementsByClassName("specials")[0];
//     // window.HTMLElement.prototype.scrollIntoView = function() {};
//     console.log(element);
//     if (element) {
//       console.log("found element");
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };
//   const handleClickScroll2 = (e) => {
//     e.preventDefault();
//     const element = document.getElementsByClassName("about")[0];
//     // window.HTMLElement.prototype.scrollIntoView = function() {};
//     console.log(element);
//     if (element) {
//       // console.log(element)
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };
const [panel, setPanel] = useState(false)

const myStyle = {
  display: panel ? "flex" : "none"
}
  return (
    <div className="header" onClick={() => {setPanel(p => !p)}}>
      <img src={logo} alt="logo" />
      <div className="bars">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav style={myStyle}>
        <ul>
          {/* <li><a href="#">Home</a></li> */}
          <li>
            <Link to="/" className="nav-item">
              Homepage
            </Link>
          </li>

          {/* <li><a href="#">About</a></li> */}
          <li>
            {/* <a href="#" onClick={handleClickScroll2}>
              About
            </a> */}
            <HashLink to = "/#about" smooth className="nav-item">About</HashLink>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            {/* <a href="#">Reservations</a> */}
            <Link to="/reservations" className="nav-item">
              Reservations
            </Link>
          </li>
          <li>
            <HashLink to= "/#specials" smooth className="nav-item">Order Online</HashLink>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
