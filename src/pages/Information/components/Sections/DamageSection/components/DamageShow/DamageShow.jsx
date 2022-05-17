import React from 'react';
import c from "./DamageShow.module.css";
import Edit from "../../../../Edit/Edit";

const DamageShow = ({property, value, images = [], link = ""}) => {
    return (
        <div className={c.DamageShow}>
            <div className={c.Inner}>
                <div className={c.Title}>
                    <p>{property}</p>
                    <p>{value}</p>
                </div>
                <div className={c.Images}>
                    {images.map((i, idx) => (
                        <img key={i + idx} src={i} alt={`damage${idx}`}/>
                    ))}
                </div>
            </div>
            <Edit link={link}/>
        </div>
    );
};

export default DamageShow;