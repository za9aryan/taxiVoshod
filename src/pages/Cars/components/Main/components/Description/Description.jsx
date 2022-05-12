import c from "./Description.module.css"
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const Description = () => {
    const {carDamage} = useSelector(state => state.reducer)

    const isHaveDamage = {
        right: false,
        left: false,
        rear: false,
        front: false
    }

    const [damage, setDamage] = useState(isHaveDamage)

    useEffect(() => {
        if(carDamage?.list?.length){
            carDamage.list.forEach((c) => {
                if(c.descr.length || c.images.length){
                    setDamage(prevState => ({
                        ...prevState,
                        [c.side]: true
                    }))
                }
            })
        }
    }, [carDamage?.list?.length])



    return (
        <div className={c.Description}>
            <div className={c.DescriptionItem}>
                {Object.entries(damage).map(([key, value], index) => {
                    if (index < 2) {
                        return (
                            <div key={key + index} className={c.TextContainer}>
                                <div className={`${c.Circle} ${value ? c.IsDamage : ""}`}/>
                                <p className={c.Text}>{value ? "Есть" : "Нет"} повреждения</p>
                            </div>
                        )
                    }
                    return null
                })}
            </div>
            <div className={c.DescriptionItem}>
                {Object.entries(damage).map(([key, value], index) => {
                    if (index > 1) {
                        return (
                            <div key={key + index} className={c.TextContainer}>
                                <div className={`${c.Circle} ${value ? c.IsDamage : ""}`}/>
                                <p className={c.Text}>{value ? "Есть" : "Нет"} повреждения</p>
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