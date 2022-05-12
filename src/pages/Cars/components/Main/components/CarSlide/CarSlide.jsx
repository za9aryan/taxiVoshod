import {useEffect, useRef} from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import c from "./CarSlide.module.css"

import CustomNextArrow from "./components/CustomNextArrow/CustomNextArrow";
import CustomPrevArrow from "./components/CustomPrevArrow/CustomPrevArrow";
import RightSideIcon from "./components/Icons/RightSideIcon/RightSideIcon";
import LeftSideIcon from "./components/Icons/LeftSideIcon/LeftSideIcon";
import RearSideIcon from "./components/Icons/RearSideIcon/RearSideIcon";
import FrontSideIcon from "./components/Icons/FrontSideIcon/FrontSideIcon";

const CarSlide = ({isActive = "right", setIsActive}) => {

    const isHaveDamage = [
        {
            side: "right",
            Component: RightSideIcon
        },
        {
            side: "left",
            Component: LeftSideIcon
        },
        {
            side: "rear",
            Component: RearSideIcon
        },
        {
            side: "front",
            Component: FrontSideIcon
        }]

    const SliderRef = useRef()

    const handlerSlideChange = (index) => {
        setIsActive(isHaveDamage[index].side)
    }


    useEffect(() => {
        const idx = isHaveDamage.findIndex(({side}) => side === isActive)
        SliderRef.current.slickGoTo(idx)
    }, [isActive, isHaveDamage])

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        swipeToSlide: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow/>,
        prevArrow: <CustomPrevArrow/>,
        beforeChange: (current, next) => handlerSlideChange(next)
    };


    return (
        <div className={c.CarSlideContainer}>
            <Slider ref={SliderRef} {...settings}>
                {isHaveDamage.map(({side, Component}, index) => (
                    <div key={side + index} className={c.CarSlide}>
                        <Component side={side}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarSlide;


