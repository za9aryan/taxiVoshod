import React from 'react';
import c from "./Box.module.css"

const Box = ({style, children, className, p, bg}) => {
    return (
        <div className={`${c.Box} ${className}`} style={{
            padding: p,
            backgroundColor: bg,
            ...style
        }}>
            {children}
        </div>
    );
};

export default Box;