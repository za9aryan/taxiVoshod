import React from 'react';
import style from "./DamageDetailsRightSideSliderTitle.module.css";

const DamageDetailsRightSideSliderTitle = ({active, carDamage}) => {
    return (
        <div className={style.sliderTitleWrapper}>
            <span className={style.sliderTitle}>Повреждение</span>
            <div className={style.sliderCount}>
                <span style={{fontWeight: '700'}}>{active}</span>
                /
                <span style={{fontWeight: '400'}}>{carDamage.length}</span>
            </div>
        </div>
    );
};

export default DamageDetailsRightSideSliderTitle;