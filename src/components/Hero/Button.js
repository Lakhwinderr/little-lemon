import './Button.css'
import { useNavigate } from 'react-router-dom';
const Button = () => {
    const navigate = useNavigate();
    const routeChange = () => {
        navigate('/reservations')
    }
    return <button onClick = {routeChange}>Reserve a Table</button>
}

export default Button;