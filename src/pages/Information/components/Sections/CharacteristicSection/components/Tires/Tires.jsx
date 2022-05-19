import React from 'react';
import c from "./Tires.module.css"

import Title from "./Title/Title";
import Edit from "../../../../Edit/Edit";
import Line from "../../../../Line/Line";

import frontWheel from "../../../../../../../assets/img/information/frontWheel.svg"
import rearWheel from "../../../../../../../assets/img/information/rearWheel.svg"
import snow from "../../../../../../../assets/img/information/snow.svg"
import sun from "../../../../../../../assets/img/information/sun.svg"

const Tires = () => {
    return (
        <div style={{minWidth: "400px"}}>
            <Title/>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={frontWheel} alt={"Car"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Передние шины:</p>
                        <div className={c.Inner}>
                            <div className={c.Image}>
                                <img src={snow} alt={"snow"}/>
                            </div>
                            <p className={`${c.Value} customText`}>245/50 r20 nokian hakkapeliitta r3 suv 106r xl </p>

                        </div>
                    </div>
                </div>
                <div className={c.Protector}>
                    <p className={`customText`}>4мм</p>
                    <Edit/>
                </div>
            </div>
            <Line/>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={rearWheel} alt={"rearWheel"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Задние шины:</p>
                        <div className={c.Inner}>
                            <div className={c.Image}>
                                <img src={sun} alt={"sun"}/>
                            </div>
                            <p className={`${c.Value} customText`}>245/50 r20 nokian hakkapeliitta r3 suv 106r xl </p>

                        </div>
                    </div>
                </div>
                <div className={c.Protector}>
                    <p className={`customText`}>4мм</p>
                    <Edit/>
                </div>
            </div>
        </div>
    );
};

export default Tires;