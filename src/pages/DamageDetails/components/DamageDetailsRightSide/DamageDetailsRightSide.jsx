import React from 'react';
import style from './DamageDetailsRightSide.module.css'
import {DamageDetailsData} from "../../../../utils/DamageDetailsData";
import DamageDetailsRightSideHeader from "./components/DamageDetailsRightSideHeader/DamageDetailsRightSideHeader";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.css'
import DamageDetailsRightSideContent from "./components/DamageDetailsRightSideContent/DamageDetailsRightSideContent";

const DamageDetailsRightSide = ({active, setActive}) => {

    const previous = () => {
        if (active < 2) {
            setActive(DamageDetailsData.length);
        } else {
            setActive(active - 1);
        }
    }

    const next = () => {
        if (active > DamageDetailsData.length - 1) {
            setActive(1)
        } else {
            setActive(active + 1);
        }
    }

    const onclick = (event) => {
        setActive(event + 1)
    }

    return (active && <div className={style.container}>
        <DamageDetailsRightSideHeader
            DamageDetailsData={DamageDetailsData}
            active={active}
            previous={previous}
            next={next}
        />

        <DamageDetailsRightSideContent
            active={active}
            onclick={onclick}
        />
    </div>);
};

export default DamageDetailsRightSide;