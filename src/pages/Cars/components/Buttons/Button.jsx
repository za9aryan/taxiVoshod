import c from "./Button.module.css"

const Button = ({children, className, onClick}) => {
    return (
        <div className={c.ButtonContainer}>
            <button className={`${c.Button} primary`}>
                Повреждения
            </button>
            <button className={`${c.Button} second`}>
                Далее
            </button>
        </div>
    )
}

export default Button;