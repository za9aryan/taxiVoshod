import React, { useEffect, useState } from 'react';
import style from "./DamageDetailsRightSideContent.module.css";
import { Carousel } from "react-responsive-carousel";
import imageCompression from "browser-image-compression";
import DamageDetailsRightSideCarouselItem
    from "./components/DamageDetailsRightSideCourselItem/DamageDetailsRightSideCourselItem";
import { useDispatch, useSelector } from "react-redux";
import { addCarDamageDetailsEffect } from "../../../../../../redux/effects/Effect";
import { useUploadForm } from "../../../../../../utils/useFileUpload";
import { useNavigate } from 'react-router-dom';

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;


const DamageDetailsRightSideContent = ({ active, onclick, carDamage, previous }) => {

    const { uploadForm, progress, isLoading } = useUploadForm('https://mechanic.taxivoshod.ru/api/upload.php');
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [imageFiles, setImageFiles] = useState([]);
    const [images, setImages] = useState();
    const [id, setId] = useState(null);

    const [form, setForm] = useState(() => {
        let damages = {
            name: {},
            description: {},
            images: []
        }
        carDamage.forEach(({ id, descr, images, name }) => {
            if (descr.length || images.length) {
                damages = {
                    ...damages,
                    name: {
                        ...damages.name,
                        [id]: name
                    },
                    description: {
                        ...damages.description,
                        [id]: descr
                    }
                }
            }

        })

        return damages

    });

    const fileUpload = async (e, index) => {
        const { files } = e.target;
        setId(carDamage[index].id);
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
            const fd = new FormData();
            fd.append('file', files[0]);
            const a = await uploadForm(fd);
            setImages(a.id);
        }
    }

    useEffect(() => {
        const fileReaders = [];
        if (imageFiles.length) {
            imageFiles.forEach((file) => {
                const fileReader = new FileReader();
                fileReaders.push(fileReader);
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if (result) {
                        const tmp = [
                            ...form.images,
                        ];
                        tmp.unshift({
                            id: active,
                            img: result
                        })

                        setForm(prevState => ({
                            ...prevState,
                            images: tmp
                        }));
                    }
                }
                fileReader.readAsDataURL(file);
            })
        }
        return () => {
            fileReaders.forEach(fileReader => {
                if (fileReader.readyState === 1) {
                    fileReader.abort()
                }
            })
        }
    }, [imageFiles]);

    useEffect(() => {
        if (images) {
            const idx = form.images.findIndex(({ images }) => images.id === active)
            form.images[idx].idx = images
        }
        const changeImages = [...form.images]
        changeImages[idx] = currentImage
        setForm({
            ...form,
            images: changeImages
        });
    }, [images])

    useEffect(() => {
        const changeImages = []
        carDamage.forEach(({ id, images }, index) => images.length && images.forEach(({ img }) => changeImages.push({ id: index, img })))
        console.log(changeImages, "changeImages");
        setForm(prevstate => ({
            ...prevstate,
            images: [
                ...prevstate.images,
                ...changeImages
            ]
        }))
    }, [carDamage])

    const addDamageDetails = () => {
        const fd = new FormData;
        console.log(form, "form");
        Object.entries(form.name).forEach(([key, value]) => fd.append(`name[${key}]`, value));
        Object.entries(form.description).forEach(([key, value]) => fd.append(`descr[${key}]`, value));
        form.images.forEach((value) => fd.append(`images[${value.id + 1}][]`, value.idx));
        // console.log(fd.getAll(`images[${3}][]`))
        dispatch(addCarDamageDetailsEffect(fd));
        navigate('/car-details')
    }

    return (
        <div className={style.sliderWrapper}>
            <Carousel
                showArrows={false}
                showStatus={false}
                selectedItem={active}
                showIndicators={false}
            >
                {carDamage.map((item) => (
                    <DamageDetailsRightSideCarouselItem
                        key={item.id}
                        item={item}
                        isLoading={isLoading}
                        progress={progress}
                        form={form}
                        setForm={setForm}
                        id={"file"}
                        active={active}
                        previous={previous}
                        fileUpload={fileUpload} />
                ))}
            </Carousel>

            <button disabled={isLoading} className={`${isLoading ? 'disabled' : 'primary'}`}
                style={{ width: '100%', minHeight: '80px' }} onClick={addDamageDetails}>
                Сохранить
            </button>
        </div>
    );
};

export default DamageDetailsRightSideContent;