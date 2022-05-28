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

    const {uploadForm, progress, isLoading} = useUploadForm('https://taxivoshod.ru/api/upload.php');
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [imageFiles, setImageFiles] = useState([]);

    const [images, setImages] = useState();

    const [id, setId] = useState(null);

    const [form, setForm] = useState(() => {
        let damages = {
            name: {},
            description: {},
            images: {}
        }
        carDamage.forEach(({id, descr, images, name}) => {
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
                    },
                    images: {
                        ...damages.images,
                        [id]: [...images.map(({id, img}) => ({id, img}))]
                    }
                }
            }

        })
        return damages
    });

    /*useEffect(() => {
        const changeImages = []
        carDamage.forEach(({id, images}, index) => images.length &&
            images.forEach(({img}) => changeImages.push({id: index, img})))
        setForm(prevState => ({
            ...prevState,
            images: [
                ...prevState.images,
                ...changeImages
            ]
        }))
    }, [carDamage])*/

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
            [currentCarDamageIndex]: [
                {
                    id: currentCarDamageImageId,
                    img: result
                }
            ]
        }
        return changeForm
    }

    const changeCurrentImage = (currentCarDamageIndex, currentCarDamageImageId, result) => {
        const changeForm = {...form}
        changeForm.images[currentCarDamageIndex] = [
            ...changeForm.images[currentCarDamageIndex],
            {
                id: currentCarDamageImageId,
                img: result
            }
        ]
        return changeForm
    }

    const fileReaderHelper = (validFiles, index, currentCarDamageImageId) => {
        const currentCarDamageIndex = carDamage[index].id
        console.log(currentCarDamageIndex, "currentCarDamageIndex")
        const currentCarDamageName = carDamage[index].name
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            const {result} = e.target
            if (result) {
                console.log(form.images[currentCarDamageIndex], "form.images[currentCarDamageIndex]")
                if (!!form.images[currentCarDamageIndex]) {
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
        /*fileReader.onload = (e) => {
            const {result} = e.target;
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
        }*/

    }

    console.log(form ,"fffffffffffffffffffffffffff")

    const fileUpload = async (e, index) => {
        console.log(index, "99999999999999999999999999999999999")
        const {files} = e.target;
        const valid = await fileValidHelper(files)
        if (valid.length) {
            const currentCarDamageImageId = await uploadFormHelper(files[0])
            if (currentCarDamageImageId !== -1) {
                fileReaderHelper(valid[0], index, currentCarDamageImageId)
            }
        }
    }

    /*useEffect(() => {
        const fileReaders = [];
        if (imageFiles.length) {
            imageFiles.forEach((file) => {
                const fileReader = new FileReader();
                fileReaders.push(fileReader);
                fileReader.onload = (e) => {
                    const {result} = e.target;
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
    }, [imageFiles]);*/

    /*useEffect(() => {
        const changeImages = [...form.images]
        if (images) {
            const idx = form.images.findIndex(({images}) => images.id === active)
            changeImages[idx].idx = images
            setForm({
                ...form,
                images: changeImages
            });
        }
    }, [images])*/


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
