import c from "./CustomNextArrow.module.css"

import nextArrow from "../../../../../../../../assets/img/car/nextArrow.svg"

const CustomNextArrow = ({ className, style, onClick }) => {

    return (
        <div
            className={`${className} ${c.CustomNextArrow}`}
            style={{ ...style, right: "30px" }}
            onClick={() => onClick()}
        >
            <img src={nextArrow} alt={"next"}/>
        </div>
    )
};

export default CustomNextArrow;