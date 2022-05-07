import React from 'react';
import CarIcon from "./CarIcon";
import Ellipse from "../Ellipse/Ellipse";
import {leftDamage} from "../damages";

const LeftSideIcon = ({part}) => {
    return (
        <svg width="714" height="232" viewBox="0 0 714 232" fill="none" xmlns="http://www.w3.org/2000/svg">
            <CarIcon/>
            {Object.entries(leftDamage).map(([key, value], index) => (
                <Ellipse key={key + index} {...value} isDamage={key === part}/>
            ))}
        </svg>
    );
};

export default LeftSideIcon;