import React from 'react';
import {Grid, Stack} from "@mui/material";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import ImagesShow from "./components/ImagesShow/ImagesShow";

const CarouselItemImageUpload = ({form, setForm, isLoading, active, progress, fileUpload, id}) => {
    return (
        <Grid
            style={{marginTop: '20px', marginBottom: '10px'}}
            container
            spacing={2}
        >
            <Grid item xs={1}>
                <ImageUpload fileUpload={fileUpload} active={active} id={id} />
            </Grid>

            <Grid item xs={11}>
                <ImagesShow form={form} setForm={setForm} progress={progress} isLoading={isLoading} />
            </Grid>
        </Grid>
    );
};

export default CarouselItemImageUpload;