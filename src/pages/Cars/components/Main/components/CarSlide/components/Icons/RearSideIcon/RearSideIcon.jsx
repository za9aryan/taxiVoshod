import React from 'react';
import CarIcon from "./CarIcon";
import Ellipse from "../Ellipse/Ellipse";
import {rearDamage} from "../damages";
import {useSelector} from "react-redux";

const RearSideIcon = ({side}) => {

    const {carDamage} = useSelector(state => state.reducer)

    const isHaveDamage = (key) => {
        return carDamage.list.some((c) => c.side === side && key === c.part)
    }

    return (
        <svg width="100%" height="100%" viewBox="0 0 326 238" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_1027)">
                <CarIcon/>
                {Object.entries(rearDamage).map(([key, value], index) => (
                    <Ellipse key={key + index} {...value} isDamage={isHaveDamage(key)}/>
                ))}
            </g>
            <defs>
                <clipPath id="clip0_1_1027">
                    <rect width="326" height="238" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
};

export default RearSideIcon;