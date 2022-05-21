import React, {useEffect} from 'react';
import NumberFormat from 'react-number-format'

import c from "./CarInfoSection.module.css"

import Box from "../../Box/Box";
import Line from "../../Line/Line";
import Edit from "../../Edit/Edit";

import car from "../../../../../assets/img/information/car.svg"
import profile from "../../../../../assets/img/information/profile.svg"
import check from "../../../../../assets/img/information/check.svg"
import {useSelector} from "react-redux";

const CarInfoSection = () => {

    const {finish} = useSelector(state => state.reducer)

    const {
        cars,
        drivers,
        terms,
        terms2
    } = finish


    return (
        <Box>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={car} alt={"Car"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Автомобиль:</p>
                        <p className={`${c.Value} customText`}>{cars ? cars.name : null}</p>
                    </div>
                </div>
                <Edit link={"/"}/>
            </div>
            <Line/>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={profile} alt={"profile"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Водитель:</p>
                        <p className={`${c.Value} customText`}>{drivers ? drivers.name : null}1</p>
                    </div>
                </div>
                <Edit link={"/driver-search"}/>
            </div>
            <Line/>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={check} alt={"check"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Условия работы:</p>
                        <p className={`${c.Value} customText`}>
                            {terms ? terms.name : null}
                            &nbsp;
                            {terms2 ? "Аренда посуточная" : null}
                            &nbsp;
                            {terms2 ?
                                <NumberFormat value={terms2.price} displayType={'text'} thousandSeparator={" "} suffix={"р/день"}/>
                                : null
                            }
                        </p>
                    </div>
                </div>
                <Edit link={"/cooperation-type"}/>
            </div>
        </Box>
    );
};

export default CarInfoSection;