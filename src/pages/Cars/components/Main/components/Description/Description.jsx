import c from "./Description.module.css"
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const Description = () => {
    const {carDamage} = useSelector(state => state.reducer)

    const isHaveDamage = [
        {side: "right", damage: false},
        {side: "left", damage: false},
        {side: "rear", damage: false},
        {side: "front", damage: false}
    ]

    const [damage, setDamage] = useState(isHaveDamage)

    useEffect(() => {
        if(carDamage?.list?.length){
            const damage = []
            isHaveDamage.forEach((d) => {
                damage.push({
                    side: d.side,
                    damage: carDamage.list.some((c) => c.side === d.side && c.part.length)
                })
            })
            setDamage(damage);
        }
    }, [carDamage?.list?.length])



    return (
        <div className={c.Description}>
            <div className={c.DescriptionItem}>
                {damage.map(({side, damage}, index) => {
                    if (index < 2) {
                        return (
                            <div key={side + index} className={c.TextContainer}>
                                <div className={`${c.Circle} ${damage ? c.IsDamage : ""}`}/>
                                <p className={c.Text}>{damage ? "Есть" : "Нет"} повреждения</p>
                            </div>
                        )
                    }
                    return null
                })}
            </div>
            <div className={c.DescriptionItem}>
                {damage.map(({side, damage}, index) => {
                    if (index > 1) {
                        return (
                            <div key={side + index} className={c.TextContainer}>
                                <div className={`${c.Circle} ${damage ? c.IsDamage : ""}`}/>
                                <p className={c.Text}>{damage ? "Есть" : "Нет"} повреждения</p>
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