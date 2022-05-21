import React from 'react';
import style from "../../../../DamageDetailsRightSideCarouselItem.module.css";
import DamageDetailsRightSideChooseAFileIcon
    from "../../../../../../../DamageDetailsRightSideIcons/DamageDetailsRightSideChooseAFileIcon";

const ImageUpload = ({fileUpload, active}) => {
    return (
        <div>
            <input type="file" name="file" id="file" className={style.inputfile} accept='image/*' onChange={(e) => fileUpload(e, active)}/>
            <label htmlFor="file">
                <DamageDetailsRightSideChooseAFileIcon />
                Загрузить фото
            </label>
        </div>
    );
};

export default ImageUpload;