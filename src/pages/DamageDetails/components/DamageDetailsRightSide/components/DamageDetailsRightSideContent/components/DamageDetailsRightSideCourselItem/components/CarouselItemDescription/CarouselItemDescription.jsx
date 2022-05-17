import React from 'react';
import style from "../../DamageDetailsRightSideCarouselItem.module.css";

const CarouselItemDescription = () => {
    return (
        <div>
            <textarea rows={25} className={style.description} placeholder='Описание повреждения'></textarea>
        </div>
    );
};

export default CarouselItemDescription;