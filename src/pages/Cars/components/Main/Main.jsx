import c from "./Main.module.css"
import Heading from "./components/Heading/Heading";
import Description from "./components/Description/Description";
import CarSlide from "./components/CarSlide/CarSlide";
import {useEffect, useState} from "react";
import {getCarDamageEffect} from "../../../../redux/effects/Effect";
import {useDispatch, useSelector} from "react-redux";

const Main = () => {
    const [isActive, setIsActive] = useState("right")
    const [loading, setLoading] = useState(true)
    const {carDamage} = useSelector(state => state.reducer)


    const dispatch = useDispatch()

    useEffect(() => {
        if (!carDamage?.list?.length) {
            dispatch(getCarDamageEffect())
            setLoading(false)
        } else {
            setLoading(false)
        }
    }, [carDamage?.list?.length])

    return (
        <div className={c.Main}>
            {loading ? (
                <div className={c.Loading}/>
            ) : (
                <>
                    <Heading isActive={isActive} setIsActive={setIsActive}/>
                    <Description/>
                    <CarSlide isActive={isActive} setIsActive={setIsActive}/>
                </>
            )}
        </div>
    )
}

export default Main;