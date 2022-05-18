import React from 'react';
import c from "./Title.module.css"

import damage from "../../../../../../../assets/img/information/damage.svg"

const Title = () => {
    return (
        <div className={c.Container}>
            <div className={c.Image}>
                <img src={damage} alt={"damage"}/>
            </div>
            <p className={c.Title}>ПОВРЕЖДЕНИЯ</p>
        </div>
    );
};

export default Title;