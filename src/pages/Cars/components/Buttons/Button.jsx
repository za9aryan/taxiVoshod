import c from "./Button.module.css"
import { useNavigate } from "react-router-dom"

const Button = ({ children, className, onClick }) => {
    const navigate = useNavigate()
    const handleButtonCLick = () => {
        navigate('/car-details')
    }

    const handleDamageDetailsClick = () => {
        navigate(`/damage-details`)
    }

    return (
        <div className={c.ButtonContainer}>
            <button className={`${c.Button} primary`} onClick={handleDamageDetailsClick}>
                Повреждения
            </button>
            <button onClick={handleButtonCLick} className={`${c.Button} second`}>
                Далее
            </button>
        </div>
    )
}

export default Button;