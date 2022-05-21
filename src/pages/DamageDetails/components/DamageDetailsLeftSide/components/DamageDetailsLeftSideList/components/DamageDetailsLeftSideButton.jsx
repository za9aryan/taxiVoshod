import React from 'react';
import style from "../../../DamageDetailsLeftSide.module.css";

const DamageDetailsLeftSideButton = ({handleOpen}) =>
    <button onClick={handleOpen} className={`${style.btnItem} ${style.primary}`}>Другое &nbsp;  <span className={style.plus}>+</span></button>;

export default DamageDetailsLeftSideButton;