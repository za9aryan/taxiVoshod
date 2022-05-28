import React, {useEffect, useState} from 'react';
import style from "./DamageDetailsRightSideContent.module.css";
import {Carousel} from "react-responsive-carousel";
import imageCompression from "browser-image-compression";
import DamageDetailsRightSideCarouselItem
    from "./components/DamageDetailsRightSideCourselItem/DamageDetailsRightSideCourselItem";
import {useDispatch, useSelector} from "react-redux";
import {addCarDamageDetailsEffect} from "../../../../../../redux/effects/Effect";
import {useUploadForm} from "../../../../../../utils/useFileUpload";
import {useNavigate} from 'react-router-dom';

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;


const DamageDetailsRightSideContent = ({active, onclick, carDamage, previous}) => {

    const {uploadForm, progress, isLoading} = useUploadForm('https://mechanic.taxivoshod..ru/api/upload.php');
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [form, setForm] = useState(() => {
        let damages = {
            name: {},
            description: {},
            images: {}
        }
        carDamage.forEach(({id, descr, images, name}, index) => {
            if (descr.length) {
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
            if (images.length) {
                const changeImages = []
                images.forEach(img => {
                    changeImages.push({
                        carDamageId: id,
                        imageId: img.id,
                        img: img.img
                    })
                })
                damages = {
                    ...damages,
                    name: {
                        ...damages.name,
                        [id]: name
                    },
                    images: {
                        ...damages.images,
                        [active]: changeImages
                    }
                }
            }
        })
        return damages
    });

    const fileValidHelper = async (files) => {
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
        return validImageFiles
    }

    const uploadFormHelper = async (file) => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            const res = await uploadForm(formData)
            if (res.success) {
                return res.id
            } else {
                return -1
            }
        } catch (e) {
            console.log("uploadFormHelper", e.message)
        }

    }

    const createNewImage = (currentCarDamageIndex, currentCarDamageName, currentCarDamageImageId, result) => {
        const changeForm = {...form}
        changeForm.name = {
            ...changeForm.name,
            [currentCarDamageIndex]: currentCarDamageName
        }
        changeForm.images = {
            ...changeForm.images,
            [active]: [
                {
                    carDamageId: currentCarDamageIndex,
                    imageId: currentCarDamageImageId,
                    img: result
                }
            ]
        }
        return changeForm
    }

    const changeCurrentImage = (currentCarDamageIndex, currentCarDamageImageId, result) => {
        const changeForm = {...form}
        changeForm.images[active].push({
            carDamageId: currentCarDamageIndex,
            imageId: currentCarDamageImageId,
            img: result
        })

        return changeForm
    }

    const fileReaderHelper = (validFiles, index, currentCarDamageImageId) => {
        const currentCarDamageIndex = carDamage[active].id
        const currentCarDamageName = carDamage[active].name
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            const {result} = e.target
            if (result) {
                if (!!form.images[active] && !!form.name[currentCarDamageIndex]) {
                    // If There is Have That Index
                    const changeForm = changeCurrentImage(currentCarDamageIndex, currentCarDamageImageId, result)
                    setForm(changeForm)
                } else {
                    // If Don`t
                    const createNewForm = createNewImage(currentCarDamageIndex, currentCarDamageName, currentCarDamageImageId, result)
                    setForm(createNewForm)
                }
            }
        }
        fileReader.readAsDataURL(validFiles);
    }


    const fileUpload = async (e, index) => {
        const {files} = e.target;
        const valid = await fileValidHelper(files)
        if (valid.length) {
            const currentCarDamageImageId = await uploadFormHelper(files[0])
            if (currentCarDamageImageId !== -1) {
                fileReaderHelper(valid[0], index, currentCarDamageImageId)
            }
        }
    }
        console.log(form, "form");

    const addDamageDetails = () => {
        const fd = new FormData;

        Object.entries(form.name).forEach(([key, value]) => fd.append(`name[${key}]`, value))
        Object.entries(form.description).forEach(([key, value]) => fd.append(`descr[${key}]`, value))

        Object.values(form.images).forEach(value => {
            value.forEach(({carDamageId, imageId}) => fd.append(`images[${carDamageId}][]`, [imageId]))
        })

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
                        fileUpload={fileUpload}/>
                ))}
            </Carousel>

            <button disabled={isLoading} className={`${isLoading ? 'disabled' : 'primary'}`}
                    style={{width: '100%', minHeight: '80px'}} onClick={addDamageDetails}>
                Сохранить
            </button>
        </div>
    );
};

export default DamageDetailsRightSideContent;
