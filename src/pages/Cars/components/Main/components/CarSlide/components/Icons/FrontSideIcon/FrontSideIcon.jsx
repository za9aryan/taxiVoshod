import React from 'react';
import CarIcon from "./CarIcon";
import Ellipse from "../Ellipse/Ellipse";
import {frontDamage} from "../damages";

const FrontSideIcon = ({part}) => {
    return (
        <svg width="326" height="235" viewBox="0 0 326 235" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_1253)">
                <CarIcon/>
                {Object.entries(frontDamage).map(([key, value], index) => (
                    <Ellipse key={key + index} {...value} isDamage={key === part}/>
                ))}
            </g>
            <defs>
                <clipPath id="clip0_1_1253">
                    <rect width="326" height="235" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
};

export default FrontSideIcon;