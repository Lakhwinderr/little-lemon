import "./Footer.css";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <img src={logo} alt="logo" />
        <div className="linksFrame">
          <div className="doormat doormat1">
            <div>Dormat Navigation</div>
            <div className="links">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Menu</a>
                </li>
                <li>
                  <a href="#">Reservations</a>
                </li>
                <li>
                  <a href="#">Order Online</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="doormat doormat2">
            <div>Contact</div>
            <div className="links">
              <ul>
                <li>
                  <a href="#">Address</a>
                </li>
                <li>
                  <a href="#">Phone</a>
                </li>
                <li>
                  <a href="#">Email</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="doormat doormat3">
            <div>Social Media Links</div>
            <div className="links">
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
