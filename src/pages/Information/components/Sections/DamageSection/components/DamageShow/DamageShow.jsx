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
                <div className={c.ImagesContainer}>
                    {images.map((i, idx) => (
                        <div className={c.Image}>
                            <img key={i + idx} src={i} alt={`damage${idx}`}/>
                        </div>
                    ))}
                </div>
            </div>
            <Edit link={link}/>
        </div>
    );
};

export default DamageShow;