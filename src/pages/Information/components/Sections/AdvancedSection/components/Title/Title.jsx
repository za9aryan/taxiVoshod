import React from 'react';
import c from "./Title.module.css"

import advanced from "../../../../../../../assets/img/information/advanced.svg"

const Title = () => {
    return (
        <div className={c.Container}>
            <div className={c.Image}>
                <img src={advanced} alt={"advanced"}/>
            </div>
            <p className={c.Title}>ДОПОЛНИТЕЛЬНЫЕ ЗАМЕЧАНИЯ:</p>
        </div>
    );
};

export default Title;