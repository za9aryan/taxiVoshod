import React from 'react';
import style from "../../../../DamageDetailsRightSideCarouselItem.module.css";
import DamageDetailsRightSideChooseAFileIcon
    from "../../../../../../../DamageDetailsRightSideIcons/DamageDetailsRightSideChooseAFileIcon";

const ImageUpload = ({fileUpload, item}) => {
    return (
        <div>
            <input type="file" multiple name="file" id="file" className={style.inputfile} accept='image/*' onChange={(e) => fileUpload(e, item.id)}/>
            <label htmlFor="file">
                <DamageDetailsRightSideChooseAFileIcon />
                Загрузить фото
            </label>
        </div>
    );
};

export default ImageUpload;