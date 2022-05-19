import React, {useState} from 'react';
import {Stack} from "@mui/material";
import style from "../../DamageDetailsRightSideCarouselItem.module.css";
import DamageDetailsRightSidePenIcon from "../../../../../DamageDetailsRightSideIcons/DamageDetailsRightSidePenIcon";
import DamageDetailsRightSideTrashIcon
    from "../../../../../DamageDetailsRightSideIcons/DamageDetailsRightSideTrashIcon";
import DamageDetailsRightSideXIcon from "../../../../../DamageDetailsRightSideIcons/DamageDetailsRightSideXIcon";

const CarouselItemHeader = ({item, form, setForm}) => {

    const [edit, setEdit] = useState(false)

    return (<Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
        >
            <p className={style.title}>
                {edit ? <input type="text" value={form.name[item.id]} defaultValue={item.name} onChange={(e) => setForm({
                    ...form,
                    name: {
                        [item.id]: e.target.value
                    }
                })} autoFocus/> : form.name[item.id] || item.name}
            </p>
            <span>
                <span style={{marginRight: '20px', cursor: 'pointer'}} onClick={() => setEdit(!edit)}>{edit ? <DamageDetailsRightSideXIcon /> : <DamageDetailsRightSidePenIcon/>}</span>
                <DamageDetailsRightSideTrashIcon/>
            </span>
        </Stack>);
};

export default CarouselItemHeader;