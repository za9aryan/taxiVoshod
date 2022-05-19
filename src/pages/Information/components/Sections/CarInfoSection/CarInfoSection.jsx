import React from 'react';

import c from "./CarInfoSection.module.css"

import Box from "../../Box/Box";
import Line from "../../Line/Line";
import Edit from "../../Edit/Edit";

import car from "../../../../../assets/img/information/car.svg"
import profile from "../../../../../assets/img/information/profile.svg"
import check from "../../../../../assets/img/information/check.svg"

const CarInfoSection = () => {

    return (
        <Box>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={car} alt={"Car"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Автомобиль:</p>
                        <p className={`${c.Value} customText`}>Hyundai Sonata ВМ 1753 СР</p>
                    </div>
                </div>
                <Edit/>
            </div>
            <Line/>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={profile} alt={"profile"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Водитель:</p>
                        <p className={`${c.Value} customText`}>Петров Иван Иванович 1161</p>
                    </div>
                </div>
                <Edit/>
            </div>
            <Line/>
            <div className={c.Container}>
                <div className={c.Inner}>
                    <div className={c.Image}>
                        <img src={check} alt={"check"}/>
                    </div>
                    <div className={c.Text}>
                        <p className={c.Property}>Условия работы:</p>
                        <p className={`${c.Value} customText`}>Аренда посуточная 1300р/день</p>
                    </div>
                </div>
                <Edit/>
            </div>
        </Box>
    );
};

export default CarInfoSection;