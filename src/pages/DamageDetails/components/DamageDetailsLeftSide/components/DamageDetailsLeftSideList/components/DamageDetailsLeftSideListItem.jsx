import React from 'react';
import style from "../../../DamageDetailsLeftSide.module.css";

const DamageDetailsLeftSideListItem = ({item, active, setActive, index}) => {
    return <li className={`${style.item} ${(item.descr.length || item.images.length) && style.damage} ${active === index && style.active}`} onClick={() => setActive(index)} key={item.id}>{item.name}</li>
};

export default DamageDetailsLeftSideListItem;