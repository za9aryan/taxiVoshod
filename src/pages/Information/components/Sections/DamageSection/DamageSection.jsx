import React from 'react';
import {v4 as uuid4} from "uuid"
import c from "./DamageSection.module.css"
import {useSelector} from "react-redux";

import Box from "../../Box/Box";
import Title from "./components/Title/Title";
import Line from "../../Line/Line";
import DamageShow from "./components/DamageShow/DamageShow";


const DamageSection = () => {

    const {finish} = useSelector(state => state.reducer)

    const {
        damage
    } = finish

    return (
        <Box>
            <div className={c.DamageSection}>
                <Title/>
                <Line/>
                {
                    damage ? damage.list.map(({name, descr, images}, index) => (
                        <React.Fragment key={uuid4()}>
                            <DamageShow images={images} property={name + ":"} value={descr} link={"/damage-details"}/>
                            <Line d={index === damage.list.length - 1 ? "none" : "block"}/>
                        </React.Fragment>
                    )) : null
                }
            </div>
        </Box>
    );
};

export default DamageSection;