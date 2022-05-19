import c from "./Button.module.css"
import { useNavigate } from "react-router-dom"

const Button = ({ title, color }) => {
    const navigate = useNavigate()
    const handleButtonCLick = () => {
        navigate('/car-details')
    }

    return (
        <div className={c.ButtonContainer}>
            <button className={`${c.Button} ${color}`}>
                {title}
            </button>
        </div>
    )
}

export default Button;