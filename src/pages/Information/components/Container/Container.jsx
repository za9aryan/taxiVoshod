import React from 'react';
import c from "./Container.module.css"

import Edit from "../Edit/Edit";

const Container = ({imageSrc, className, property, value, edit = {link: "", mode: "dark", w: null, h: null}}) => {
    return (
        <div className={`${c.Container} ${className}`}>
            <div className={c.Inner}>
                <div className={c.Image}>
                    <img src={imageSrc} alt={"carInfo"} />
                </div>
                <p className={c.Property}>{property}</p>
                <p className={c.Value}>{value}</p>
            </div>
            {edit && <Edit {...edit} />}
        </div>
    );
};

export default Container;