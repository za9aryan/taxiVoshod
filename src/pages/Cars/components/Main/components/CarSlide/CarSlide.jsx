import { useEffect, useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import c from "./CarSlide.module.css"

import CustomNextArrow from "./components/CustomNextArrow/CustomNextArrow";
import CustomPrevArrow from "./components/CustomPrevArrow/CustomPrevArrow";
import Icons from "./components/Icons/Icons";

const CarSlide = ({ isActive = "right", setIsActive }) => {

    const isHaveDamage = ["right", "left", "rear", "front"]

    const SliderRef = useRef()

    const handlerSlideChange = (index) => {
        setIsActive(isHaveDamage[index])
    }


    useEffect(() => {
        const idx = isHaveDamage.findIndex((side) => side === isActive)
        SliderRef.current.slickGoTo(idx)
    }, [isActive, isHaveDamage])

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        swipeToSlide: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        beforeChange: (current, next) => handlerSlideChange(next)
    };


    return (
        <div className={c.CarSlideContainer}>
            <Slider ref={SliderRef} {...settings}>
                {isHaveDamage.map((side, index) => (
                    <div key={side + index} className={c.CarSlide}>
                        <Icons side={side} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarSlide;


