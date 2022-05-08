import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function RangeSlider(props) {
    return (
        <div>
            <Slider  sx={{ color: "#F5C257" }} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </div>
    );
}

export default RangeSlider;