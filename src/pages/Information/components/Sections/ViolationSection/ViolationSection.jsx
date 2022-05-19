import React from 'react';
import c from "./ViolationSection.module.css";

import Box from "../../Box/Box";
import Edit from "../../Edit/Edit";

import violation from "../../../../../assets/img/information/violation.svg";
import Line from "../../Line/Line";

const ViolationSection = () => {
    return (
        <Box>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={violation} alt={"violation"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>НАРУШЕНИЯ:</p>
                    </div>
                </div>
                <Edit/>
            </div>
            <Line />
            <div className={c.Container}>
                <p className={`${c.Value} customText`}>
                    Отсутствуют: запасное колесо, катализатор, зарядное устройство
                    Повреждён чехол заднего сидения
                    Грязный салон
                </p>
            </div>
            <Line />
            <div className={c.Container}>
                <div className={c.Inner}>
                    <p className={c.Property}>ШТРАФ:</p>
                    <p className={c.Property}>15 000р</p>
                </div>
            </div>
        </Box>
    );
};

export default ViolationSection;