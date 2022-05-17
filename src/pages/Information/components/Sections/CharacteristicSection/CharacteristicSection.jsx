import React from 'react';

import Box from "../../Box/Box";
import Container from "../../Container/Container";
import Line from "../../Line/Line";

import character from "../../../../../assets/img/information/characters.svg"

import fuel from "../../../../../assets/img/information/fuel.svg"
import run from "../../../../../assets/img/information/run.svg"
import cleanliness from "../../../../../assets/img/information/cleanliness.svg"
import salon from "../../../../../assets/img/information/salon.svg"

import tires from "../../../../../assets/img/information/tires.svg"


const CharacteristicSection = () => {
    return (
        <Box>
            <Container imageSrc={character} property={"ХАРАКТЕРИСТИКИ АВТОМОБИЛЯ"} edit={false}/>
            <Line />
            <Container imageSrc={fuel} property={"Топливо:"} value={"8 литров"}/>
            <Line />
            <Container imageSrc={run} property={"Пробег:"} value={"158 000 км"}/>
            <Line />
            <Container imageSrc={cleanliness} property={"Чистота кузова:"} value={"Чистый"}/>
            <Line />
            <Container imageSrc={salon} property={"Чистота салона:"} value={"Грязный"}/>
            <Line h={"10px"}/>

        </Box>
    );
};

export default CharacteristicSection;