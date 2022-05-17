import React, {useEffect, useState} from 'react';
import style from "./DamageDetailsRightSideContent.module.css";
import {Carousel} from "react-responsive-carousel";
import {DamageDetailsData} from "../../../../../../utils/DamageDetailsData";
import imageCompression from "browser-image-compression";
import DamageDetailsRightSideCarouselItem
    from "./components/DamageDetailsRightSideCourselItem/DamageDetailsRightSideCourselItem";

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;


const DamageDetailsRightSideContent = ({active, onclick}) => {

    const [imageFiles, setImageFiles] = useState([]);
    const [images, setImages] = useState({});

    const fileUpload = async (e) => {
        const { files } = e.target;
        const validImageFiles = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.match(imageTypeRegex)) {
                const options = {
                    maxSizeMB: 1,
                    maxWidthOrHeight: 1920,
                    useWebWorker: true
                }
                const compressedFile = await imageCompression(file, options);
                validImageFiles.push(compressedFile);
            }
        }
        if (validImageFiles.length) {
            setImageFiles(validImageFiles);
            return;
        }
    }

    useEffect(() => {
        const image = images[active] ? images[active].images : [],
            fileReaders = [];
        let isCancel = false;
        if (imageFiles.length) {
            imageFiles.forEach((file) => {
                const fileReader = new FileReader();
                fileReaders.push(fileReader);
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if (result) {
                        image.push(result);
                    }
                    if (!isCancel) {
                        setImages(prevState => ({
                            ...prevState,
                            [active]: {
                                images: [...image]
                            }
                        }));
                    }
                }
                fileReader.readAsDataURL(file);
            })
        };
        return () => {
            isCancel = true;
            fileReaders.forEach(fileReader => {
                if (fileReader.readyState === 1) {
                    fileReader.abort()
                }
            })
        }
    }, [imageFiles]);


    return (
        <div className={style.sliderWrapper}>
            <Carousel showArrows={false} showStatus={false} selectedItem={active - 1} onChange={onclick}>
                {DamageDetailsData.map((item, index) => {
                    return <DamageDetailsRightSideCarouselItem key={active} active={active} item={item} fileUpload={fileUpload} images={images}/>
                })}
            </Carousel>

            <button className={`primary`} style={{width: '100%', minHeight: '80px'}}>
                Сохранить
            </button>
        </div>
    );
};

export default DamageDetailsRightSideContent;