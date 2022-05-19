import React from 'react';
import c from "./DamageSection.module.css"

import Box from "../../Box/Box";
import Title from "./components/Title/Title";
import Line from "../../Line/Line";
import damage from "../../../../../assets/img/information/damage.svg"

import damage1 from "../../../../../assets/img/information/damage1.png"
import damage2 from "../../../../../assets/img/information/damage2.png"
import damage3 from "../../../../../assets/img/information/damage3.png"
import damage4 from "../../../../../assets/img/information/damage4.png"
import damage5 from "../../../../../assets/img/information/damage5.png"
import damage6 from "../../../../../assets/img/information/damage6.png"
import damage7 from "../../../../../assets/img/information/damage7.png"
import damage8 from "../../../../../assets/img/information/damage8.png"
import Edit from "../../Edit/Edit";
import DamageShow from "./components/DamageShow/DamageShow";

const DamageSection = () => {

    const image = [damage1, damage2, damage3, damage4]
    const image2 = [damage5, damage6, damage7, damage8]

    return (
        <Box>
            <div className={c.DamageSection}>
                <Title />
                <Line/>
                <DamageShow images={image} property={"Левое крыло:"} value={"Царапина"}/>
                <Line/>
                <DamageShow images={image2} property={"Капот:"} value={"Вмятина справа"}/>
            </div>
        </Box>
    );
};

export default DamageSection;