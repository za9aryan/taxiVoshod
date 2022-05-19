import React from 'react';
import c from "./Characters.module.css"

import Line from "../../../../Line/Line";
import Edit from "../../../../Edit/Edit";
import Title from "./Title/Title";

import fuel from "../../../../../../../assets/img/information/fuel.svg";
import run from "../../../../../../../assets/img/information/run.svg";
import cleanliness from "../../../../../../../assets/img/information/cleanliness.svg";
import salon from "../../../../../../../assets/img/information/salon.svg";

const Characters = () => {
    return (
        <>
            <Title />
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={fuel} alt={"fuel"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Топливо:</p>
                        <p className={`${c.Value} customText`}>8 литров</p>
                    </div>
                </div>
                <Edit/>
            </div>
            <Line/>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={run} alt={"run"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Пробег:</p>
                        <p className={`${c.Value} customText`}>158 000 км</p>
                    </div>
                </div>
                <Edit/>
            </div>
            <Line/>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={cleanliness} alt={"cleanliness"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Чистота кузова:</p>
                        <p className={`${c.Value} customText`}>Чистый</p>
                    </div>
                </div>
                <Edit/>
            </div>
            <Line/>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={salon} alt={"salon"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Чистота салона:</p>
                        <p className={`${c.Value} customText`}>Грязный</p>
                    </div>
                </div>
                <Edit/>
            </div>
        </>
    );
};

export default Characters;