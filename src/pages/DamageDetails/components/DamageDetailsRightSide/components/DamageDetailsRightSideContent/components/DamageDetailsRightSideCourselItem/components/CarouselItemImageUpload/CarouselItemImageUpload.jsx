import React from 'react';
import style from "../../DamageDetailsRightSideCarouselItem.module.css";
import {Stack} from "@mui/material";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import ImagesShow from "./components/ImagesShow/ImagesShow";

const CarouselItemImageUpload = ({active, fileUpload, images}) => {
    return (
        <Stack
            style={{marginTop: '20px', marginBottom: '20px'}}
            direction="row"
            alignItems="center"
            spacing={2}
        >
            <ImageUpload fileUpload={fileUpload} />

            <ImagesShow images={images} active={active} />
        </Stack>
    );
};

export default CarouselItemImageUpload;