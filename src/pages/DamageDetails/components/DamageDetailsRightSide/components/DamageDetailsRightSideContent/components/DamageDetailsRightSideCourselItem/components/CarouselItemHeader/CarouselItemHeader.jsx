import React from 'react';
import {Stack} from "@mui/material";
import style from "../../DamageDetailsRightSideCarouselItem.module.css";
import DamageDetailsRightSidePenIcon from "../../../../../DamageDetailsRightSideIcons/DamageDetailsRightSidePenIcon";
import DamageDetailsRightSideTrashIcon
    from "../../../../../DamageDetailsRightSideIcons/DamageDetailsRightSideTrashIcon";

const CarouselItemHeader = ({item}) => {
    return (<Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
        >
            <p className={style.title}>
                {item.name}
            </p>
            <span>
                <span style={{marginRight: '20px'}}><DamageDetailsRightSidePenIcon/></span>
                <DamageDetailsRightSideTrashIcon/>
            </span>
        </Stack>);
};

export default CarouselItemHeader;