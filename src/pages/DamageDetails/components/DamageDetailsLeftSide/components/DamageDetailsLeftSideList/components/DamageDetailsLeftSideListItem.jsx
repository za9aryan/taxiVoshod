import React from 'react';
import style from "../../../DamageDetailsLeftSide.module.css";

const DamageDetailsLeftSideListItem = ({item, active, setActive}) => {
    return <li className={`${style.item} ${active === item.id && style.active}`} onClick={() => setActive(item.id)} key={item.id}>{item.name}</li>
};

export default DamageDetailsLeftSideListItem;