import React from 'react';
import c from "./AdvancedSection.module.css"

import Title from "./components/Title/Title";
import Box from "../../Box/Box";
import Line from "../../Line/Line";
import Edit from "../../Edit/Edit";
import {useSelector} from "react-redux";

const AdvancedSection = () => {

    const {finish} = useSelector(state => state.reducer)

    const {
        details
    } = finish

    return (
        <Box>
            <Title />
            <Line />
            <div className={c.Container}>
                <p className={`${c.Value} customText`}>{details ? details.comments : null}</p>
                <Edit link={"/car-details"}/>
            </div>
        </Box>
    );
};

export default AdvancedSection;