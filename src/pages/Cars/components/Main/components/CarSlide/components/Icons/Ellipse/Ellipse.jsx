import React from 'react';

const Ellipse = (props) => {
    const {
        cx,
        cy,
        rx,
        ry,
        transform,
        isDamage
    } = props
    return (
        <>
            {isDamage && <circle cx={cx} cy={cy} r="12" stroke="#F5C257" strokeWidth="1" fill="rgba(0,0,0,0)" />}
            <ellipse cx={cx} cy={cy} rx={rx} ry={ry} transform={transform} fill={isDamage ? "#F5C257" :  "#2B334F"}/>
        </>
    );
};

export default Ellipse;