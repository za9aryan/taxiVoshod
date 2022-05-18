import React from 'react';

import c from "./PriceSection.module.css";

import Box from "../../Box/Box";
import Line from "../../Line/Line";
import Edit from "../../Edit/Edit";

import calendar from "../../../../../assets/img/information/calendar.svg";
import price from "../../../../../assets/img/information/price.svg";

const PriceSection = () => {
    return (
        <Box>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={calendar} alt={"calendar"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Срок аренды:</p>
                        <p className={c.Value}>17 дней</p>
                    </div>
                </div>
                <Edit/>
            </div>
            <Line />
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={price} alt={"price"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Стоимость:</p>
                        <p className={c.Value}>22 100 р.</p>
                    </div>
                </div>
                <Edit/>
            </div>
        </Box>
    );
};

export default PriceSection;