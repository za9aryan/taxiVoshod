import React from 'react';
import style from './DamageDetailsRightSide.module.css'
import {DamageDetailsData} from "../../../../utils/DamageDetailsData";
import DamageDetailsRightSideHeader from "./components/DamageDetailsRightSideHeader/DamageDetailsRightSideHeader";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.css'
import DamageDetailsRightSideContent from "./components/DamageDetailsRightSideContent/DamageDetailsRightSideContent";

const DamageDetailsRightSide = ({active, setActive, carDamage}) => {

    const previous = () => {
        if (active < 2) {
            setActive(carDamage.length - 1);
        } else {
            setActive(active - 1);
        }
    }

    const next = () => {
        if (active > carDamage.length - 1) {
            setActive(1)
        } else {
            setActive(active + 1);
        }
    }

    const onclick = (event) => {
        setActive(event)
    }

    console.log(active)

    return (active !== undefined
        && <div className={style.container}>
        <DamageDetailsRightSideHeader
            carDamage={carDamage}
            active={active}
            previous={previous}
            next={next}
        />

        <DamageDetailsRightSideContent
            active={active}
            onclick={onclick}
            carDamage={carDamage}
        />
    </div>);
};

export default DamageDetailsRightSide;