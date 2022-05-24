import React, { useEffect, useState } from 'react';
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import { MenuWithBar } from "../../components/Components";

import * as Sections from "./components/Sections/Sections"

import c from "./Information.module.css"
import Button from "./components/Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { getCarAllInformationEffect, setSuccessCarAllInformationEffect } from "../../redux/effects/Effect";
import { useNavigate } from 'react-router-dom';
import TransitionModal from '../CardDetails/components/TransitionModal';

const Information = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { finishStatus } = useSelector(state => state.reducer)
    const [showModal, setShowModal] = useState({ open: false, text: "" })
    useEffect(() => {
        dispatch(getCarAllInformationEffect())
    }, [])


    console.log(finishStatus, "finishStatus");

    useEffect(() => {
        if (finishStatus?.success === undefined) return
        if (finishStatus?.success === true) {
            navigate('/')
            dispatch(setSuccessCarAllInformationEffect())
        } else if (finishStatus?.success === false) {
            setShowModal({ open: true, text: finishStatus?.message })
        }
    }, [finishStatus])

    return (
        <>
            <MenuWithBar />
            {showModal?.open && <TransitionModal modal={showModal} setClose={() => { setShowModal({ open: false, message: "" }) }} />}
            <div className={c.MainContainer}>
                <Breadcrumbs onClick={() => { navigate("/second-terms") }} />
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