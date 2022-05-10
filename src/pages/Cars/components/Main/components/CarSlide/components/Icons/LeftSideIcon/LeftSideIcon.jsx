import React from 'react';
import CarIcon from "./CarIcon";
import Ellipse from "../Ellipse/Ellipse";
import {leftDamage} from "../damages";
import {useSelector} from "react-redux";

const LeftSideIcon = ({side}) => {

    const { carDamage } = useSelector(state => state.reducer)

    const isHaveDamage = (key) => {
        return carDamage.list.some((c) => c.side === side && key === c.part)
    }

    return (
        <svg width="100%" height="100%" viewBox="0 0 714 232" fill="none" xmlns="http://www.w3.org/2000/svg">
            <CarIcon/>
            {Object.entries(leftDamage).map(([key, value], index) => (
                <Ellipse key={key + index} {...value} isDamage={isHaveDamage(key)}/>
            ))}
        </svg>
    );
};

export default LeftSideIcon;