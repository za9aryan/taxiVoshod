import React, {useEffect, useState} from 'react';
import Modal from "@mui/material/Modal";
import style from "../../DamageDetailsLeftSide.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CarouselItemDescription
    from "../../../DamageDetailsRightSide/components/DamageDetailsRightSideContent/components/DamageDetailsRightSideCourselItem/components/CarouselItemDescription/CarouselItemDescription";
import CarouselItemImageUpload
    from "../../../DamageDetailsRightSide/components/DamageDetailsRightSideContent/components/DamageDetailsRightSideCourselItem/components/CarouselItemImageUpload/CarouselItemImageUpload";
import imageCompression from "browser-image-compression";
import {addCarDamageDetailsEffect} from "../../../../../../redux/effects/Effect";
import {useDispatch, useSelector} from "react-redux";
import {useUploadForm} from "../../../../../../utils/useFileUpload";


const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '80%',
    bgcolor: 'background.paper',
    boxShadow: '10px 0px 50px 10px rgba(0, 0, 0, 0.05)',
    p: '30px 116px',
    borderRadius: '20px',
    border: 'none',
    outline: 'none',
    textAlign: 'center',
};

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

const DamageDetailsLeftSideModal = ({open, handleClose}) => {

    const dispatch = useDispatch();
    const {uploadForm, progress, isLoading} = useUploadForm('https://taxivoshod.ru/api/upload.php');

    const {success} = useSelector(state => state.reducer);

    const [form, setForm] = useState({
        name: {},
        description: {},
        images: []
    });

    useEffect(() => {
        return () => {
            setForm({
                name: {},
                description: {},
                images: []
            })
        }
    }, [open])

    useEffect(() => {
        if (success) {
            setForm({
                name: {},
                description: {},
                images: []
            })
            handleClose();
        }
    }, [success])


    const [imageFiles, setImageFiles] = useState([]);
    const [images, setImages] = useState();
    const [error, setError] = useState(false);

    const fileUploadModal = async (e) => {
        const { files } = e.target;
        console.log(files, 'hjj')
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

            return;
        }
    }

    useEffect(() => {
        const image = form.images[0] ? form.images[0] : [],
            fileReaders = [];
        if (imageFiles.length) {
            imageFiles.forEach((file) => {
                const fileReader = new FileReader();
                fileReaders.push(fileReader);
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if (result) {
                        const tmp = [
                            ...form.images,
                            {
                                id: undefined,
                                img: result
                            }
                        ];

                        setForm(prevState => ({
                            ...prevState,
                            images: tmp
                        }))
                    }
                }
                fileReader.readAsDataURL(file);
            })
        };
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
            form.images[form.images.length - 1].id = images
        }
        setForm(form);
    }, [images])

    const handleError = () => {
        if (!form.name[1] || !form.name[1].length) {
            setError(true);
            return;
        }

        const fd = new FormData;

        Object.entries(form.name).forEach(([key, value]) => fd.append(`new_name[${key}]`, value));
        Object.entries(form.description).forEach(([key, value]) => fd.append(`new_descr[${key}]`, value));
        form.images.forEach(value => fd.append(`new_images[1][]`, value.id));

        for (var pair of fd.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }

        dispatch(addCarDamageDetailsEffect(fd));
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropProps= {{
                    classes: {
                        root: style.backDrop
                    }
                }}
            >
                <Box sx={styles} className={style.modal}>
                    <Box className={style.closeIcon} onClick={handleClose}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0C13.1042 0 10.4271 0.713542 7.96875 2.14062C5.51042 3.56771 3.56771 5.51042 2.14062 7.96875C0.713542 10.4271 0 13.1042 0 16C0 18.8958 0.713542 21.5729 2.14062 24.0312C3.56771 26.4896 5.51042 28.4323 7.96875 29.8594C10.4271 31.2865 13.1042 32 16 32C18.8958 32 21.5729 31.2865 24.0312 29.8594C26.4896 28.4323 28.4323 26.4896 29.8594 24.0312C31.2865 21.5729 32 18.8958 32 16C32 13.1042 31.2865 10.4271 29.8594 7.96875C28.4323 5.51042 26.4896 3.56771 24.0312 2.14062C21.5729 0.713542 18.8958 0 16 0ZM16 30.0312C14.4792 30.0312 13.0052 29.7969 11.5781 29.3281C10.151 28.8594 8.86458 28.1875 7.71875 27.3125C6.57292 26.4375 5.56771 25.4271 4.70312 24.2812C3.83854 23.1354 3.17188 21.849 2.70312 20.4219C2.23438 18.9948 2 17.5208 2 16C2 14.1042 2.36979 12.2917 3.10938 10.5625C3.84896 8.83333 4.84375 7.34375 6.09375 6.09375C7.34375 4.84375 8.83333 3.84896 10.5625 3.10938C12.2917 2.36979 14.1042 2 16 2C17.8958 2 19.7083 2.36979 21.4375 3.10938C23.1667 3.84896 24.6562 4.84375 25.9062 6.09375C27.1562 7.34375 28.151 8.83333 28.8906 10.5625C29.6302 12.2917 30 14.1042 30 16C30 17.8958 29.6302 19.7083 28.8906 21.4375C28.151 23.1667 27.1562 24.6615 25.9062 25.9219C24.6562 27.1823 23.1667 28.1823 21.4375 28.9219C19.7083 29.6615 17.8958 30.0312 16 30.0312ZM21.6562 10.3438C21.4688 10.1562 21.2344 10.0625 20.9531 10.0625C20.6719 10.0625 20.4375 10.1562 20.25 10.3438L16 14.5938L11.75 10.3438C11.5625 10.1562 11.3281 10.0625 11.0469 10.0625C10.7656 10.0625 10.5312 10.1562 10.3438 10.3438C10.1562 10.5312 10.0625 10.7656 10.0625 11.0469C10.0625 11.3281 10.1562 11.5625 10.3438 11.75L14.5938 16L10.3438 20.25C10.2188 20.375 10.1302 20.5208 10.0781 20.6875C10.026 20.8542 10.026 21.026 10.0781 21.2031C10.1302 21.3802 10.2188 21.5312 10.3438 21.6562C10.5312 21.8438 10.7656 21.9375 11.0469 21.9375C11.3281 21.9375 11.5625 21.8438 11.75 21.6562L16 17.4062L20.25 21.6562C20.4375 21.8438 20.6719 21.9375 20.9531 21.9375C21.2344 21.9375 21.4688 21.8438 21.6562 21.6562C21.7812 21.5312 21.8698 21.3802 21.9219 21.2031C21.974 21.026 21.974 20.8542 21.9219 20.6875C21.8698 20.5208 21.7812 20.375 21.6562 20.25L17.4062 16L21.6562 11.75C21.8438 11.5625 21.9375 11.3281 21.9375 11.0469C21.9375 10.7656 21.8438 10.5312 21.6562 10.3438Z" fill="white"/>
                        </svg>
                    </Box>
                    <Typography fontWeight='bold' textAlign='center' id="modal-modal-title" variant="h6" component="h2">
                        Добавить новое повреждение
                    </Typography>
                    <Typography id="modal-modal-description" fontSize='13px' sx={{ mt: '30px', mb: '20px' }}>
                        Введите название поврежденной детали
                    </Typography>

                    <input type="text" className={`${style.modalInput} ${error && style.error}`} value={form.name[1]} onChange={(e) => setForm({...form, name: {1: e.target.value}})}/>

                    <Typography id="modal-modal-description" fontSize='13px' sx={{ mt: '30px', mb: '20px' }}>
                        Введите описание повреждения
                    </Typography>

                    <CarouselItemDescription rows={10} placeholder={''} form={form} setForm={setForm} item={{name: '', descr: '', id: 1}} />

                    <Box mt='30px'>
                        <CarouselItemImageUpload
                            isLoading={isLoading}
                            progress={progress}
                            item={{name: '', descr: '', id: 1}}
                            form={form}
                            setForm={setForm}
                            active={1}
                            fileUpload={fileUploadModal}
                        />
                    </Box>

                    {error && <Typography mt='20px' mb='15px' fontSize='18px' color='#FF4B4B' fontWeight='bold'>Некорректный ввод данных</Typography>}

                    <button disabled={isLoading} onClick={handleError} className={`primary ${isLoading &&'disabled'}`} style={{width: '100%', minHeight: '80px'}}>
                        Сохранить
                    </button>
                </Box>
            </Modal>
        </>
    );
};

export default DamageDetailsLeftSideModal;