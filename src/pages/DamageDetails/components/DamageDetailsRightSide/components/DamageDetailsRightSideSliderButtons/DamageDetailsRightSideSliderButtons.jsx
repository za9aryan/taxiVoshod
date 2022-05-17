import React from 'react';
import style from './DamageDetailsRightSideSliderButtons.module.css'

const DamageDetailsRightSideSliderButtons = ({onClick, icon, iconTitle}) => {
    return (
        <div
            className={style.arrow}
            onClick={() => onClick()}
        >
            <img src={icon} alt={iconTitle}/>
        </div>
    );
};

export default DamageDetailsRightSideSliderButtons;