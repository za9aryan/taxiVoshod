import React from 'react';

import Box from "../../Box/Box";
import Line from "../../Line/Line";
import Characters from "./components/Characters/Characters";
import Tires from "./components/Tires/Tires";

const CharacteristicSection = () => {
    return (
        <Box>
            <Characters />
            <Line h={"10px"}/>
            <div style={{overflow: "auto", width: "100%"}}>
                <Tires />
            </div>
        </Box>
    );
};

export default CharacteristicSection;