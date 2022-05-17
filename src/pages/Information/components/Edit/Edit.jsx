import React from 'react';
import c from "./Edit.module.css"
import {Link} from "react-router-dom";

const Edit = ({link = "", mode = "dark", w, h}) => {
    return (
        <Link to={link} className={c.Edit}>
            <svg width={w || "24"} height={h || "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.9238 4.00529L19.8059 8.9113L7.44788 21.3299L2.56851 16.4239L14.9238 4.00529ZM23.5105 2.82207L21.3333 0.634164C20.4919 -0.211388 19.1255 -0.211388 18.2813 0.634164L16.1957 2.72996L21.0778 7.63601L23.5105 5.19138C24.1632 4.53552 24.1632 3.47789 23.5105 2.82207ZM0.0135859 23.3196C-0.0752629 23.7215 0.285759 24.0815 0.685669 23.9838L6.126 22.6583L1.24662 17.7523L0.0135859 23.3196Z"
                    fill={mode === "dark" ? "#2B334F" : "#FFF"}/>
            </svg>
        </Link>
    );
};

export default Edit;