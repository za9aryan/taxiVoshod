import React from 'react';
import style from './DamageDetailsLeftSide.module.css'
import './scrollbar.css'
import DamageDetailsLeftSideList from "./components/DamageDetailsLeftSideList/DamageDetailsLeftSideList";
import DamageDetailsLeftSideButton from "./components/DamageDetailsLeftSideList/components/DamageDetailsLeftSideButton";
import DamageDetailsLeftSideModal from "./components/DamageDetailsLeftSideModal/DamageDetailsLeftSideModal";

const DamageDetailsLeftSide = ({active, setActive, carDamage}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className={style.wrapper}>
            <DamageDetailsLeftSideList active={active} setActive={setActive} carDamage={carDamage}/>

            <DamageDetailsLeftSideButton handleOpen={handleOpen}/>

            <DamageDetailsLeftSideModal open={open} handleClose={handleClose}/>
        </div>
    );
};

export default DamageDetailsLeftSide;