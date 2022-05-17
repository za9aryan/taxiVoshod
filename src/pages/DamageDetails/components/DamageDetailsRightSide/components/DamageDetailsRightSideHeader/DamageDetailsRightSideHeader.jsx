import React from 'react';
import style from "./DamageDetailsRightSideHeader.module.css";
import DamageDetailsRightSideSliderButtons
    from "../DamageDetailsRightSideSliderButtons/DamageDetailsRightSideSliderButtons";
import prevArrow from "../../../../../../assets/img/car/prevArrow.svg";
import DamageDetailsRightSideSliderTitle from "../DamageDetailsRightSideSliderTitle/DamageDetailsRightSideSliderTitle";
import nextArrow from "../../../../../../assets/img/car/nextArrow.svg";

const DamageDetailsRightSideHeader = ({previous, active, next, DamageDetailsData}) => {
    return (
        <div className={style.sliderBtn}>
            <DamageDetailsRightSideSliderButtons onClick={previous} icon={prevArrow} iconTitle={'prev'}/>
            <DamageDetailsRightSideSliderTitle active={active} DamageDetailsData={DamageDetailsData}/>
            <DamageDetailsRightSideSliderButtons onClick={next} icon={nextArrow} iconTitle={'next'}/>
        </div>
    );
};

export default DamageDetailsRightSideHeader;