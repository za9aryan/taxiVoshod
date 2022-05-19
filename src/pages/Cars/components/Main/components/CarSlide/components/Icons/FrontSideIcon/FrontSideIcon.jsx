import React from 'react';
import CarIcon from "./CarIcon";
import Ellipse from "../Ellipse/Ellipse";
import { frontDamage } from "../damages";
import { useSelector } from "react-redux";

const FrontSideIcon = ({ side }) => {

    const { carDamage } = useSelector(state => state.reducer)

    const isHaveDamage = (key) => {
        return carDamage?.list?.length && carDamage.list.some((c) => (key === c.part && c.side === side) && !!(c.descr.length || c.images.length))
    }

    return (
        <svg width="100%" height="100%" viewBox="0 0 326 235" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_1253)">
                <CarIcon />
                {Object.entries(frontDamage).map(([key, value], index) => (
                    <Ellipse key={key + index} {...value} isDamage={isHaveDamage(key)} />
                ))}
            </g>
            <defs>
                <clipPath id="clip0_1_1253">
                    <rect width="326" height="235" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default FrontSideIcon;