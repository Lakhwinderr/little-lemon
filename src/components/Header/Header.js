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
            <Link to="/little-lemon" className="nav-item" onClick = {() => {
        setToggle(p => !p)
      }}>
              Homepage
            </Link>
          </li>
          {}
          <li>
            <HashLink to="/little-lemon/#about" smooth className="nav-item" onClick = {() => {
        setToggle(p => !p)
      }}>
              About
            </HashLink>
          </li>
          <li>
            <a href="/little-lemon/#" onClick = {() => {
        setToggle(p => !p)
      }}>Menu</a>
          </li>
          <li>
            {}
            <Link to="/little-lemon/reservations" className="nav-item" onClick = {() => {
        setToggle(p => !p)
      }}>
              Reservations
            </Link>
          </li>
          <li>
            <HashLink to="/little-lemon/#specials" smooth className="nav-item" onClick = {() => {
        setToggle(p => !p)
      }}>
              Order Online
            </HashLink>
          </li>
          <li>
            <a href="/little-lemon/#" onClick = {() => {
        setToggle(p => !p)
      }}>Login</a>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};
export default Header;
