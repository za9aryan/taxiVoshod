import React from 'react';
import NumberFormat from 'react-number-format'

import c from "./PriceSection.module.css";

import Box from "../../Box/Box";
import Line from "../../Line/Line";
import Edit from "../../Edit/Edit";

import calendar from "../../../../../assets/img/information/calendar.svg";
import price from "../../../../../assets/img/information/price.svg";
import {useSelector} from "react-redux";

const PriceSection = () => {

    const {finish} = useSelector(state => state.reducer)

    const {
        terms2
    } = finish

    return (
        <Box>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={calendar} alt={"calendar"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Срок аренды:</p>
                        <p className={`${c.Value} customText`}>{terms2 ? terms2.days : null} дней</p>
                    </div>
                </div>
                <Edit link={"/second-terms"}/>
            </div>
            <Line />
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={price} alt={"price"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Стоимость:</p>
                        <p className={`${c.Value} customText`}>
                            {
                                terms2 ?
                                    <NumberFormat
                                        value={terms2.days * terms2.price}
                                        displayType={"text"}
                                        thousandSeparator={" "}
                                        suffix={" р."}
                                    /> : null
                            }
                        </p>
                    </div>
                </div>
                <Edit link={"/second-terms"}/>
            </div>
        </Box>
    );
};

export default PriceSection;