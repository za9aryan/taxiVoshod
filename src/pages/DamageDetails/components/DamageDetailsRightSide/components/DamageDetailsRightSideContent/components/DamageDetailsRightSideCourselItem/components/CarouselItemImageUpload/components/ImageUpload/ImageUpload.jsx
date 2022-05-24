import React from 'react';
import style from "../../../../DamageDetailsRightSideCarouselItem.module.css";
import DamageDetailsRightSideChooseAFileIcon
    from "../../../../../../../DamageDetailsRightSideIcons/DamageDetailsRightSideChooseAFileIcon";

const ImageUpload = ({fileUpload, active, id}) => {
    return (
        <div>
            <input type="file" name="file" id={id} className={style.inputfile} accept='image/*' onChange={(e) => fileUpload(e, active)}/>
            <label htmlFor={id}>
                <DamageDetailsRightSideChooseAFileIcon />
                Загрузить фото
            </label>
        </div>
    );
};

export default ImageUpload;