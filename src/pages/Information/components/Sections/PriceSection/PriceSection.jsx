import React from 'react';

import Box from "../../Box/Box";
import Container from "../../Container/Container";
import Line from "../../Line/Line";

import calendar from "../../../../../assets/img/information/calendar.svg";
import price from "../../../../../assets/img/information/price.svg";

const PriceSection = () => {
    return (
        <Box>
            <Container imageSrc={calendar} property={"Срок аренды:"} value={"17 дней"} />
            <Line />
            <Container imageSrc={price} property={"Стоимость:"} value={"22 100 р."} />
        </Box>
    );
};

export default PriceSection;