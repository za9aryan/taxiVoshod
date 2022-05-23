import React from 'react';
import {Stack} from "@mui/material";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import ImagesShow from "./components/ImagesShow/ImagesShow";

const CarouselItemImageUpload = ({form, setForm, isLoading, active, progress, fileUpload, id}) => {
    return (
        <Stack
            style={{marginTop: '20px', marginBottom: '10px'}}
            direction="row"
            alignItems="center"
            spacing={2}
        >
            <ImageUpload fileUpload={fileUpload} active={active} id={id} />

            <ImagesShow form={form} setForm={setForm} progress={progress} isLoading={isLoading} />
        </Stack>
    );
};

export default CarouselItemImageUpload;