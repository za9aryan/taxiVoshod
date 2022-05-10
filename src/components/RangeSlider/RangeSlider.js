import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function RangeSlider({ max, value, getValue }) {
    return (
        <div>
            <Slider sx={{ color: "#F5C257" }} defaultValue={0} onChange={getValue} value={value} max={max} aria-label="Default" valueLabelDisplay="auto" />
        </div>
    );
}

export default RangeSlider;