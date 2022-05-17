import React from 'react';
import {Stack} from "@mui/material";
import style from "../../../../DamageDetailsRightSideCarouselItem.module.css";

const ImagesShow = ({active, images}) => {
    return (
        <>
            {
                images[active] && images[active].images.length ?
                    <Stack direction='row' spacing={2}>
                        {
                            images[active].images.map((image, idx) => {
                                return <div className={style.previewImg} key={idx}> <img src={image} alt="" /> </div>
                            })
                        }
                    </Stack>
                    : null
            }
        </>
    )
};

export default ImagesShow;