import React from 'react';
import style from "../../DamageDetailsLeftSide.module.css";
import {DamageDetailsData} from "../../../../../../utils/DamageDetailsData";
import DamageDetailsLeftSideListItem from "./components/DamageDetailsLeftSideListItem";

const DamageDetailsLeftSideList = ({active, setActive}) => {
    return (
        <ul className={style.list}>
            {
                DamageDetailsData.map(item => (
                    <DamageDetailsLeftSideListItem key={item.id} item={item} active={active} setActive={setActive} />
                ))
            }
        </ul>
    );
};

export default DamageDetailsLeftSideList;