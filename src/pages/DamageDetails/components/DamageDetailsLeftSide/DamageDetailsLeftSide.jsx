import React from 'react';
import style from './DamageDetailsLeftSide.module.css'
import './scrollbar.css'
import DamageDetailsLeftSideList from "./components/DamageDetailsLeftSideList/DamageDetailsLeftSideList";
import DamageDetailsLeftSideButton from "./components/DamageDetailsLeftSideList/components/DamageDetailsLeftSideButton";

const DamageDetailsLeftSide = ({active, setActive}) => {
    return (
        <div className={style.wrapper}>
            <DamageDetailsLeftSideList active={active} setActive={setActive}/>

            <DamageDetailsLeftSideButton />
        </div>
    );
};

export default DamageDetailsLeftSide;