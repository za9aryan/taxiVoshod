import React, {useEffect, useState} from 'react';
import {MenuWithBar} from "../../components/Components";
import c from "../Cars/Cars.module.css";
import Breadcrumbs from "../Cars/components/Breadcrumbs/Breadcrumbs";
import {useNavigate} from "react-router-dom";
import DamageDetailsLeftSide from "./components/DamageDetailsLeftSide/DamageDetailsLeftSide";
import DamageDetailsRightSide from "./components/DamageDetailsRightSide/DamageDetailsRightSide";
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getCarDamageEffect, successFalse} from "../../redux/effects/Effect";
import TransitionModal from "../CardDetails/components/TransitionModal";

const DamageDetails = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {carDamage, success, deleteItem} = useSelector(state => state.reducer);

    const [active, setActive] = useState();
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState({open: false, text: 'Успешно добавлено'});


    useEffect(() => {
        if (success && deleteItem) {
            setShowModal({...showModal, open: true, text: 'Успешно удалено'})
        } else if (success && !deleteItem) {
            setShowModal({...showModal, open: true, text: 'Успешно добавлено'})
        }
    }, [success, deleteItem])

    useEffect(() => {
        if (!carDamage.list.length) {
            dispatch(getCarDamageEffect())
        } else {
            setLoading(false)
        }
    }, [carDamage])

    const handleBreadcrumbsClick = () => {
        navigate(-1)
    }

    const closeModal = () => {
        dispatch(successFalse())
        setShowModal({...showModal, open: false});
    }

    return (
        <>
            <MenuWithBar />
            <div className={c.MainContainer}>
                <Breadcrumbs onClick={handleBreadcrumbsClick}/>
                <TransitionModal modal={showModal} success={true} setClose={closeModal} />
                {loading ? (
                    <div className={c.Loading}/>
                ) : (
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <DamageDetailsLeftSide active={active} setActive={setActive} carDamage={carDamage.list} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DamageDetailsRightSide active={active} setActive={setActive} carDamage={carDamage.list} />
                        </Grid>
                    </Grid>
                )}
            </div>
        </>
    );
};

export default DamageDetails;