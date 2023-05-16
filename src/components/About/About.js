import './About.css'
import Info from '../Hero/Info';
import mAndA from "../../assets/marioNAdrian.png"
import mAndA2 from "../../assets/marioNAdrian2.png"
const About = () => {
    return <div className="about" id='about'>
        <div className="container">
        <Info></Info>
        <div className="images">
            <img className = "m"src={mAndA} alt="owners" />
            <img className = "a" src={mAndA2} alt="owners" />
        </div>
        </div>
        
    </div>
}

export default About;