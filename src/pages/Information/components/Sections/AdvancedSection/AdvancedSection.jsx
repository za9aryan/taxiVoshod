import React from 'react';
import c from "./AdvancedSection.module.css"

import Title from "./components/Title/Title";
import Box from "../../Box/Box";
import Line from "../../Line/Line";
import Edit from "../../Edit/Edit";

const AdvancedSection = () => {
    return (
        <Box>
            <Title />
            <Line />
            <div className={c.Container}>
                <p className={c.Text}>Порван чехол на заднем сидении салона</p>
                <Edit link={""}/>
            </div>
        </Box>
    );
};

export default AdvancedSection;