import React, {useEffect} from 'react';
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import {MenuWithBar} from "../../components/Components";

import * as Sections from "./components/Sections/Sections"

import c from "./Information.module.css"
import Button from "./components/Buttons/Button";
import {useDispatch} from "react-redux";
import {getCarAllInformationEffect} from "../../redux/effects/Effect";

const Information = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCarAllInformationEffect())
    }, [])


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
                    <Sections.AdvancedSection />
                    <Sections.TableSection />
                    <Sections.ViolationSection />
                    <Button />
                </section>
            </div>
        </>

    );
};

export default Information;