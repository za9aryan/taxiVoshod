import React from 'react';
import c from "./Title.module.css"

import characters from "../../../../../../../../assets/img/information/characters.svg"


const Title = () => {
    return (
        <div className={c.Container}>
            <div className={c.Image}>
                <img src={characters} alt={"damage"}/>
            </div>
            <p className={c.Title}>ХАРАКТЕРИСТИКИ АВТОМОБИЛЯ</p>
        </div>
    );
};

export default Title;