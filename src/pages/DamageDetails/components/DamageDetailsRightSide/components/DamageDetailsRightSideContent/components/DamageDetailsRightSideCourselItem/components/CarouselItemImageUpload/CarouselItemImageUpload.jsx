import React from 'react';
import {Stack} from "@mui/material";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import ImagesShow from "./components/ImagesShow/ImagesShow";

const CarouselItemImageUpload = ({form, setForm, fileUpload, isLoading, item, active, progress}) => {
    return (
        <Stack
            style={{marginTop: '20px', marginBottom: '10px'}}
            direction="row"
            alignItems="center"
            spacing={2}
        >
            <ImageUpload fileUpload={fileUpload} active={active} />

            <ImagesShow form={form} setForm={setForm} item={item} progress={progress} isLoading={isLoading} />
        </Stack>
    );
};

export default CarouselItemImageUpload;