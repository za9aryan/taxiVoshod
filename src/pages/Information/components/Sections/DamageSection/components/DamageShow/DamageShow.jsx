import React from 'react';
import {v4 as uuid4} from "uuid"
import c from "./DamageShow.module.css";
import Edit from "../../../../Edit/Edit";

const DamageShow = ({property, value, images = [], link = ""}) => {
    return (
        <div className={c.DamageShow}>
            <div className={c.Inner}>
                <div className={c.Title}>
                    <p>{property}</p>
                    <p className={`customText`}>{value}</p>
                </div>
                <div className={c.ImagesContainer}>
                    {images.map(({img}, idx) => (
                        <div key={uuid4()} className={c.Image}>
                            <img src={"https://taxivoshod.ru" + img} alt={`damage${idx}`}/>
                        </div>
                    ))}
                </div>
            </div>
            <Edit link={link}/>
        </div>
    );
};

export default DamageShow;