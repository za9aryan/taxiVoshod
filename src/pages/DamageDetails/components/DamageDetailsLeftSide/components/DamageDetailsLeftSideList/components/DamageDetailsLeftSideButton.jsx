import React from 'react';
import style from "../../../DamageDetailsLeftSide.module.css";

const DamageDetailsLeftSideButton = () =>
    <button className={`${style.item} ${style.primary}`}>Другое &nbsp;  <span className={style.plus}>+</span></button>;

export default DamageDetailsLeftSideButton;