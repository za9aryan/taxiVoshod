import React from 'react';
import NumberFormat from 'react-number-format'
import c from "./Characters.module.css"

import Line from "../../../../Line/Line";
import Edit from "../../../../Edit/Edit";
import Title from "./Title/Title";

import fuel from "../../../../../../../assets/img/information/fuel.svg";
import run from "../../../../../../../assets/img/information/run.svg";
import cleanliness from "../../../../../../../assets/img/information/cleanliness.svg";
import salon from "../../../../../../../assets/img/information/salon.svg";
import {useSelector} from "react-redux";

const Characters = () => {

    const {finish} = useSelector(state => state.reducer)

    const {
        details
    } = finish

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
                        <p className={`${c.Value} customText`}>
                            {
                                details ? details.fuel : null
                            }
                            &nbsp;
                            {
                                details && details?.fuel_type === "liter" ? "литров" : "километров"
                            }
                        </p>
                    </div>
                </div>
                <Edit link={"/car-details"}/>
            </div>
            <Line/>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={run} alt={"run"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Пробег:</p>
                        <p className={`${c.Value} customText`}>
                            {
                                details ?
                                    <NumberFormat
                                        value={details.distance}
                                        displayType={"text"}
                                        thousandSeparator={" "}
                                        suffix={" км"}
                                    /> : null
                            }
                        </p>
                    </div>
                </div>
                <Edit link={"/car-details"}/>
            </div>
            <Line/>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={cleanliness} alt={"cleanliness"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Чистота кузова:</p>
                        <p className={`${c.Value} customText`}>
                            {
                                details ?
                                    details.body_clean ? "Чистый" : "Грязный"
                                    : null
                            }
                        </p>
                    </div>
                </div>
                <Edit link={"/car-details"}/>
            </div>
            <Line/>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={salon} alt={"salon"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Чистота салона:</p>
                        <p className={`${c.Value} customText`}>
                            {
                                details ?
                                    details.interior_clean ? "Чистый" : "Грязный"
                                    : null
                            }
                        </p>
                    </div>
                </div>
                <Edit link={"/car-details"}/>
            </div>
        </>
    );
};

export default Characters;