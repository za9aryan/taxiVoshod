import React from 'react';
import c from "./Title.module.css"

import tires from "../../../../../../../../assets/img/information/tires.svg"


const Title = () => {
    return (
        <div className={c.Container}>
            <div className={c.Inner}>
                <div className={c.Image}>
                    <img src={tires} alt={"damage"}/>
                </div>
                <p className={c.Title}>Шины</p>
            </div>
            <p className={c.Text}>Протектор</p>
        </div>
    );
};

export default Title;