import c from "./Main.module.css"
import Heading from "./components/Heading/Heading";
import Description from "./components/Description/Description";
import CarSlide from "./components/CarSlide/CarSlide";
import {useState} from "react";

const Main = () => {
    const [isActive, setIsActive] = useState("right")

    return (
        <div className={c.Main}>
            <Heading isActive={isActive} setIsActive={setIsActive}/>
            <Description/>
            <CarSlide isActive={isActive} setIsActive={setIsActive}/>
        </div>
    )
}

export default Main;