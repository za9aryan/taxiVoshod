import React from 'react';
import {Stack} from "@mui/material";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import ImagesShow from "./components/ImagesShow/ImagesShow";

const CarouselItemImageUpload = ({form, setForm, fileUpload, item, active}) => {
    return (
        <Stack
            style={{marginTop: '20px', marginBottom: '10px'}}
            direction="row"
            alignItems="center"
            spacing={2}
        >
            <ImageUpload fileUpload={fileUpload} active={active} />

            <ImagesShow form={form} setForm={setForm} item={item}  />
        </Stack>
    );
};

export default CarouselItemImageUpload;