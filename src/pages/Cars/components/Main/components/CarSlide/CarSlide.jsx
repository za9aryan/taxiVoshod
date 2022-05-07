import {useEffect, useRef} from "react";
import {useSelector} from "react-redux";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import c from "./CarSlide.module.css"

import CustomNextArrow from "./components/CustomNextArrow/CustomNextArrow";
import CustomPrevArrow from "./components/CustomPrevArrow/CustomPrevArrow";
import Icons from "./components/Icons/Icons";

const CarSlide = ({isActive = "right", setIsActive}) => {

    const {carDamage} = useSelector(state => state.reducer)

    const SliderRef = useRef()

    const handlerSlideChange = (index) => {
        setIsActive(carDamage.list[index].side)
    }

    useEffect(() => {
        const idx = carDamage.list.findIndex(({side}) => side === isActive)
        SliderRef.current.slickGoTo(idx)
    }, [isActive, carDamage.list])

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
                {carDamage.list.map(({side, part}, index) => (
                    <div key={side + part + index} className={c.CarSlide}>
                        <Icons side={side} part={part}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarSlide;


