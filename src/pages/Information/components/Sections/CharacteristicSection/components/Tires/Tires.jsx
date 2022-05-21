import React from 'react';
import c from "./Tires.module.css"

import Title from "./Title/Title";
import Edit from "../../../../Edit/Edit";
import Line from "../../../../Line/Line";

import frontWheel from "../../../../../../../assets/img/information/frontWheel.svg"
import rearWheel from "../../../../../../../assets/img/information/rearWheel.svg"
import snow from "../../../../../../../assets/img/information/snow.svg"
import sun from "../../../../../../../assets/img/information/sun.svg"
import {useSelector} from "react-redux";

const Tires = () => {

    const {finish} = useSelector(state => state.reducer)

    const {
        details
    } = finish

    return (
        <div style={{minWidth: "320px", width: "100%"}}>
            <Title/>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={frontWheel} alt={"Car"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Передние шины:</p>
                        <div className={c.Inner}>

                            {
                                details ?
                                    <>
                                        <div className={c.Image}>
                                            <img src={details.tires[details.tire_front].is_winter ? snow : sun}
                                                 alt={"snow"}/>
                                        </div>
                                        <p className={`${c.Value} customText`}>{details.tires[details.tire_front].name}</p>
                                    </>
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <div className={c.Protector}>
                    <p className={`customText`}>{details ? details.tire_front_height : null}мм</p>
                    <Edit link={"/car-details"}/>
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
                            {
                                details ?
                                    <>
                                        <div className={c.Image}>
                                            <img src={details.tires[details.tire_rear].is_winter ? snow : sun}
                                                 alt={"snow"}/>
                                        </div>
                                        <p className={`${c.Value} customText`}>{details.tires[details.tire_rear].name}</p>
                                    </>
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <div className={c.Protector}>
                    <p className={`customText`}>{details ? details.tire_rear_height : null}мм</p>
                    <Edit link={"/car-details"}/>
                </div>
            </div>
        </div>
    );
};

export default Tires;