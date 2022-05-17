import React from 'react';
import Box from "../../Box/Box";
import Container from "../../Container/Container";

import car from "../../../../../assets/img/information/car.svg"
import profile from "../../../../../assets/img/information/profile.svg"
import check from "../../../../../assets/img/information/check.svg"
import Line from "../../Line/Line";

const CarInfoSection = () => {


    return (
        <Box>
            <Container imageSrc={car} property={"Автомобиль:"} value={"Hyundai Sonata ВМ 1753 СР"} />
            <Line />
            <Container imageSrc={profile} property={"Водитель:"} value={"Петров Иван Иванович 1161"} />
            <Line />
            <Container imageSrc={check} property={"Условия работы:"} value={"Аренда посуточная 1300р/день"} />
        </Box>
    );
};

export default CarInfoSection;