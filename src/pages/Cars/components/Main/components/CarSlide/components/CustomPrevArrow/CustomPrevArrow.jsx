import React from 'react';
import c from "./CustomPrevArrow.module.css";

import prevArrow from "../../../../../../../../assets/img/car/prevArrow.svg";

const CustomPrevArrow = ({className, style, onClick}) => {
    return (
        <div
            className={`${className} ${c.CustomPrevArrow}`}
            style={{ ...style, left: "30px" }}
            onClick={onClick}
        >
            <img src={prevArrow} alt={"prev"}/>
        </div>
    );
};

export default CustomPrevArrow;