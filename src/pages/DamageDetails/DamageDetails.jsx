import React, {useState} from 'react';
import {MenuWithBar} from "../../components/Components";
import c from "../Cars/Cars.module.css";
import Breadcrumbs from "../Cars/components/Breadcrumbs/Breadcrumbs";
import {useNavigate} from "react-router-dom";
import DamageDetailsLeftSide from "./components/DamageDetailsLeftSide/DamageDetailsLeftSide";
import DamageDetailsRightSide from "./components/DamageDetailsRightSide/DamageDetailsRightSide";
import {Grid} from "@mui/material";

const DamageDetails = () => {

    const navigate = useNavigate();

    const [active, setActive] = useState()

    const handleBreadcrumbsClick = () => {
        navigate(-1)
    }

    return (
        <>
            <MenuWithBar />
            <div className={c.MainContainer}>
                <Breadcrumbs onClick={handleBreadcrumbsClick}/>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <DamageDetailsLeftSide active={active} setActive={setActive} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <DamageDetailsRightSide active={active} setActive={setActive} />
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default DamageDetails;