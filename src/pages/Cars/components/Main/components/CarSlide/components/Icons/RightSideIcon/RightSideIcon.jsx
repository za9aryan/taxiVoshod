import React from 'react';
import CarIcon from "./CarIcon";
import Ellipse from "../Ellipse/Ellipse";
import {rightDamage} from "../damages";

const RightSideIcon = ({part}) => {
    return (
        <svg width="714" height="233" viewBox="0 0 714 233" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_593)">
                <CarIcon />
                {Object.entries(rightDamage).map(([key, value], index) => (
                    <Ellipse key={key + index} {...value} isDamage={key === part}/>
                ))}
            </g>
            <defs>
                <clipPath id="clip0_1_593">
                    <rect width="714" height="233" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    );
};

export default RightSideIcon;