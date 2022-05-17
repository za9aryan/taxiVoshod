import React from 'react';
import style from "../../DamageDetailsRightSideCarouselItem.module.css";

const CarouselItemDescription = ({rows, placeholder}) => {
    return (
        <div>
            <textarea rows={rows} className={style.description} placeholder={placeholder}></textarea>
        </div>
    );
};

export default CarouselItemDescription;