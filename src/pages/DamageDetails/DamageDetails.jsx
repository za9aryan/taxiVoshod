import React, {useEffect, useState} from 'react';
import {MenuWithBar} from "../../components/Components";
import c from "../Cars/Cars.module.css";
import Breadcrumbs from "../Cars/components/Breadcrumbs/Breadcrumbs";
import {useNavigate} from "react-router-dom";
import DamageDetailsLeftSide from "./components/DamageDetailsLeftSide/DamageDetailsLeftSide";
import DamageDetailsRightSide from "./components/DamageDetailsRightSide/DamageDetailsRightSide";
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getCarDamageEffectApi} from "../../redux/effects/Effect";

const DamageDetails = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {carDamage} = useSelector(state => state.reducer);

    const [active, setActive] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!carDamage.length) {
            dispatch(getCarDamageEffectApi())
        } else {
            setLoading(false)
        }
    }, [carDamage])

    console.log(carDamage, 'aa')

    const handleBreadcrumbsClick = () => {
        navigate(-1)
    }

    return (
        <>
            <MenuWithBar />
            <div className={c.MainContainer}>
                <Breadcrumbs onClick={handleBreadcrumbsClick}/>
                {loading ? (
                    <div className={c.Loading}/>
                ) : (
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <DamageDetailsLeftSide active={active} setActive={setActive} carDamage={carDamage} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DamageDetailsRightSide active={active} setActive={setActive} carDamage={carDamage} />
                        </Grid>
                    </Grid>
                )}
            </div>
        </>
    );
};

export default DamageDetails;