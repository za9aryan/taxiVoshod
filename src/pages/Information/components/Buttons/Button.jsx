import c from "./Button.module.css"

const Button = ({ children, className, onClick }) => {

    return (
        <div className={c.ButtonContainer}>
            <button className={`${c.Button} primary`}>
                Начать Аренду
            </button>
            <button className={`${c.Button} second`}>
                Завершить осмотр
            </button>
        </div>
    )
}

export default Button;