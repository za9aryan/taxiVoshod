import React from 'react';
import style from './DamageDetailsRightSideSliderButtons.module.css'

const DamageDetailsRightSideSliderButtons = ({onClick, icon, iconTitle, lg = false}) => {
    return (
        <div
            className={`${style.arrow} ${lg && style.lg}`}
            onClick={() => onClick()}
        >
            <img src={icon} alt={iconTitle}/>
        </div>
    );
};

export default DamageDetailsRightSideSliderButtons;