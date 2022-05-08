import c from "./Description.module.css"
import {useSelector} from "react-redux";

const Description = () => {

    const {carDamage} = useSelector(state => state.reducer)

    return (
        <div className={c.Description}>
            <div className={c.DescriptionItem}>
                {carDamage.list.map(({side, part}, index) => {
                    if(index < 2){
                        return (
                            <div key={side + part + index} className={c.TextContainer}>
                                <div className={`${c.Circle} ${part.length ? c.IsDamage : ""}`}/>
                                <p className={c.Text}>{part.length ? "Есть" : "Нет"} повреждения</p>
                            </div>
                        )
                    }
                    return null
                })}
            </div>
            <div className={c.DescriptionItem}>
                {carDamage.list.map(({side, part}, index) => {
                    if(index > 1){
                        return (
                            <div key={side + part + index} className={c.TextContainer}>
                                <div className={`${c.Circle} ${part.length ? c.IsDamage : ""}`}/>
                                <p className={c.Text}>{part.length ? "Есть" : "Нет"} повреждения</p>
                            </div>
                        )
                    }
                    return null
                })}
            </div>
        </div>
    );
};

export default Description;