import React from 'react';
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import {MenuWithBar} from "../../components/Components";

import * as Sections from "./components/Sections/Sections"

import c from "./Information.module.css"

const Information = () => {
    return (
        <>
            <MenuWithBar />
            <div className={c.MainContainer}>
                <Breadcrumbs />
                <h3>СВОДНЫЙ ЭКРАН</h3>
                <p>Проверьте правильность внесенных данных</p>
                <section className={c.Sections}>
                    <Sections.CarInfoSection />
                    <Sections.PriceSection />
                    <Sections.DamageSection />
                    <Sections.CharacteristicSection />
                </section>
            </div>
        </>

    );
};

export default Information;