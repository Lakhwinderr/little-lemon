import './Button.css'
import { useNavigate } from 'react-router-dom';
const Button = () => {
    const navigate = useNavigate();
    const routeChange = () => {
        navigate("/little-lemon/reservations")
    }
    return <button className='mainButton' onClick = {routeChange}>Reserve a Table</button>
}

export default Button;