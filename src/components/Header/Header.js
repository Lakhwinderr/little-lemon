import { useEffect, useState } from "react";
import logo from "../../assets/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  const [toggle, setToggle] = useState(true);
  
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div className= "bars" onClick = {() => {
        setToggle(p => !p)
      }}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav  className= {toggle ? "active" : ""}>
        <ul>
    
          <li>
            <Link to="/" className="nav-item">
              Homepage
            </Link>
          </li>
          {}
          <li>
            <HashLink to="/#about" smooth className="nav-item">
              About
            </HashLink>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            {}
            <Link to="/reservations" className="nav-item">
              Reservations
            </Link>
          </li>
          <li>
            <HashLink to="/#specials" smooth className="nav-item">
              Order Online
            </HashLink>
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
