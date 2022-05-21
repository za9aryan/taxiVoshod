import c from "./Button.module.css"
import {useDispatch} from "react-redux";
import {finallyFinishEffect} from "../../../../redux/effects/Effect";

const Button = () => {

    const dispatch = useDispatch()

    return (
        <div className={c.ButtonContainer}>
            <button className={`${c.Button} primary`} onClick={() => dispatch(finallyFinishEffect("start"))}>
                Начать Аренду
            </button>
            <button className={`${c.Button} second`} onClick={() => dispatch(finallyFinishEffect("finish"))}>
                Завершить осмотр
            </button>
        </div>
    )
}

export default Button;