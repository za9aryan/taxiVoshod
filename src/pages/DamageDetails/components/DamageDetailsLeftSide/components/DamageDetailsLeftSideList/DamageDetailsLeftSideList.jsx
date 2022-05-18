import React from 'react';
import style from "../../DamageDetailsLeftSide.module.css";
import DamageDetailsLeftSideListItem from "./components/DamageDetailsLeftSideListItem";

const DamageDetailsLeftSideList = ({active, setActive, carDamage}) => {
    return (
        <ul className={style.list}>
            {
                carDamage.map(item => (
                    <DamageDetailsLeftSideListItem key={item.id} item={item} active={active} setActive={setActive} />
                ))
            }
        </ul>
    );
};

export default DamageDetailsLeftSideList;