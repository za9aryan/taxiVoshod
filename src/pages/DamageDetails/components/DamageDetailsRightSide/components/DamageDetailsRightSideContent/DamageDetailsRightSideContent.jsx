import React, {useEffect, useState} from 'react';
import style from "./DamageDetailsRightSideContent.module.css";
import {Carousel} from "react-responsive-carousel";
import imageCompression from "browser-image-compression";
import DamageDetailsRightSideCarouselItem
    from "./components/DamageDetailsRightSideCourselItem/DamageDetailsRightSideCourselItem";
import {useDispatch, useSelector} from "react-redux";
import {addCarDamageDetailsEffect} from "../../../../../../redux/effects/Effect";

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;


const DamageDetailsRightSideContent = ({active, onclick, carDamage}) => {

    const dispatch = useDispatch();
    const {success} = useSelector(state => state.reducer);

    const [imageFiles, setImageFiles] = useState([]);
    const [id, setId] = useState(null);

    const [form, setForm] = useState({
        name: {},
        description: {},
        images: {}
    });

    useEffect(() => {
        if (success) {
            setForm({
                name: {},
                description: {},
                images: {}
            })
        }
    }, [success])

    const fileUpload = async (e, id) => {
        const { files } = e.target;
        setId(id);
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
        console.log(id, 'asd')
        const image = form.images[id] ? form.images[id] : [],
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
                        setForm(prevState => ({
                            ...prevState,
                            images: {
                                [id]: [...image]
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

    const addDamageDetails = () => {
        const fd = new FormData;

        Object.entries(form.name).forEach(([key, value]) => fd.append(`name[${key}]`, value));
        Object.entries(form.description).forEach(([key, value]) => fd.append(`descr[${key}]`, value));
        Object.entries(form.images).forEach(([key, value]) => fd.append(`images[${key}][]`, value));
        
        dispatch(addCarDamageDetailsEffect(fd));
    }

    return (
        <div className={style.sliderWrapper}>
            <Carousel showArrows={false} showStatus={false} selectedItem={active - 1} onChange={onclick}>
                {carDamage.map((item) => {
                    return <DamageDetailsRightSideCarouselItem form={form} setForm={setForm} key={active} active={active} item={item} fileUpload={fileUpload} />
                })}
            </Carousel>

            <button className={`primary`} style={{width: '100%', minHeight: '80px'}} onClick={addDamageDetails}>
                Сохранить
            </button>
        </div>
    );
};

export default DamageDetailsRightSideContent;