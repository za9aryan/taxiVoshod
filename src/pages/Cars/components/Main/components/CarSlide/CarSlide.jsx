import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import c from "./CarSlide.module.css"


// import rightSide from "../../../../../../assets/img/car/rightSide.svg"
import rightSide from "../../../../../../assets/img/car/rightSide.svg"
import leftSide from "../../../../../../assets/img/car/leftSide.svg"
import backSide from "../../../../../../assets/img/car/backSide.svg"
import frontSide from "../../../../../../assets/img/car/frontSide.svg"
import CustomNextArrow from "./components/CustomNextArrow/CustomNextArrow";
import CustomPrevArrow from "./components/CustomPrevArrow/CustomPrevArrow";
import {useEffect, useMemo, useRef} from "react";

const CarSlide = ({isActive = "right", setIsActive}) => {

    const cars = useMemo(() => [
        {label: "right", icon: rightSide},
        {label: "left", icon: leftSide},
        {label: "back", icon: backSide},
        {label: "front", icon: frontSide}
    ], [])

    const SliderRef = useRef()

    const handlerSlideChange = (index) => {
        setIsActive(cars[index].label)
    }

    useEffect(() => {
        const idx = cars.findIndex(({label}) => label === isActive)
        SliderRef.current.slickGoTo(idx)
    }, [isActive, cars])

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        swipeToSlide: false,
        // swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        afterChange: (index) => handlerSlideChange(index)
    };


    return (
        <div className={c.CarSlideContainer}>
            <Slider ref={SliderRef} {...settings}>
                {cars.map(({label, icon}, index) => (
                    <div key={label + icon + index} className={c.CarSlide}>
                        <img src={icon} alt={label} width={"75%"}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarSlide;


const list = [
    {
        type: "left",
        damage: false
    },
    {
        type: "right",
        damage: [
            {}
        ]
    },
    {
        type: "front"
    },
    {
        type: "rear"
    }
]