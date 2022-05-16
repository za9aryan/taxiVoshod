import React, { useEffect, useState } from 'react';
import './carDetails.css'
import { MenuWithBar } from '../../components/Components';
import { FuelPart, Blocks, ExtraNote, FrontWheelBlock, BackWheelBlock, TransitionModal } from './components/CarDetailsComponents'
import block4 from '../../assets/img/block4.png';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import { useDispatch, useSelector } from "react-redux";
import { getCarDetailsEffect } from "../../redux/effects/Effect";
import { postCarDetails } from '../../redux/services/ApiServices'
import { useNavigate } from "react-router-dom";

function CarDetails(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState({ open: false, text: "" })
    const ourData = useSelector(state => state.reducer.carDetails)

    const handlerBreadcrumbsClick = () => {
        navigate(-1)
    }


    const handleNextClick = () => {
        const newObj = { ...ourData }
        delete newObj.tires
        newObj.body_clean = newObj.body_clean === "Чистый" ? true : false
        newObj.interior_clean = newObj.interior_clean === "Чистый" ? true : false;
        // newObj.fuel = newObj.fuel_type === "liter" ? newObj.fuel : (newObj.fuel / newObj.fuel_liter_limit * newObj.fuel_km_limit).toFixed(0)
        postCarDetails(newObj)
        .then(({ data }) => {
            navigate('/driver-search')
        })
        .catch((e) => setShowModal({ open: true, text: e.message }))
        
    }

    useEffect(() => {
        dispatch(getCarDetailsEffect())
    }, [])

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#EDF2FF" }}>
            <TransitionModal modal={showModal} />
            <MenuWithBar />
            <div className="carDetails_main">
                <div className="carDetails_left">
                    <div>
                        <Breadcrumbs onClick={handlerBreadcrumbsClick} />
                        <h3 className={"carDetails_h3"}>ХАРАКТЕРИСТИКИ АВТОМОБИЛЯ</h3>
                    </div>
                    <FuelPart />
                    {/* <div className="carDetails_fuel">
                        <div className="carDetails_fuel_fuel_part">
                            <p>Топливо</p>
                            <img src={fuel} alt="fuel" />
                        </div>
                        <div className="carDetails_fuel_range_part">
                            <div className="carDetails_fuel_range_part_radio_part">
                                <div className="carDetails_fuel_range_part_radio_part_in_litr">
                                    <img src={ellipse} alt="ellipse" />
                                    В литрах
                                </div>
                                <div className="carDetails_fuel_range_part_radio_part_in_km">
                                    <img src={ellipse} alt="ellipse" />
                                    На км
                                </div>
                            </div>
                            <div>
                                <div>
                                    <RangeSlider />
                                </div>
                                <div className="carDetails_fuel_range_part_min_max">
                                    <div>
                                        1
                                </div>
                                    <div>
                                        60
                                </div>
                                </div>

                            </div>

                        </div>
                        <div className="carDetails_fuel_text_part">
                            <h3>20</h3>
                            <h4>ЛИТРОВ</h4>
                        </div>

                    </div> */}
                    <Blocks />
                    {/* <div className="carDetails_block3">
                        <div className="carDetails_block">
                            <img src={block1} alt="block1" />
                            <div>
                                <p>Пробег (км)</p>
                            </div>
                            <div className="carDetails_block_probeg_input_part">
                                <input />
                            </div>
                        </div>
                        <div className="carDetails_block">
                            <img src={block2} alt="block2" />
                            <div>
                                <p>Чистота кузова</p>
                            </div>
                            <div>
                                <SelectInput data={[{ name: "Грязный" }, { name: "Чистый" }]} getSelected={getSelected} />
                            </div>
                        </div>
                        <div className="carDetails_block">
                            <img src={block3} alt="block3" />
                            <div>
                                <p>Чистота салона</p>
                            </div>
                            <div>
                                <SelectInput data={[{ name: "Грязный" }, { name: "Чистый" }]} getSelected={getSelected} />
                            </div>
                        </div>
                    </div> */}
                    <ExtraNote text={ourData.comments} />
                    {/* <div className="carDetails_notepad">
                        <div className="carDetails_notepad_title">
                            Дополнительные замечания:
                        </div>
                        <div className="carDetails_notepad_input">
                            <textarea rows="5" type="text" />
                        </div>
                    </div> */}
                    <div onClick={handleNextClick} className="carDetails_button">
                        Далее
                    </div>
                </div>
                <div className="carDetails_right">
                    <img className="carDetails_right_head_img" src={block4} alt="block4" />
                    <FrontWheelBlock />
                    {/* <div className="carDetails_right_front_wheel">
                        <div className="carDetails_right_front_wheel_head">
                            <img src={carFront} alt="carFront" />
                            <p>Передние шины</p>
                        </div>
                        <div className="carDetails_right_front_wheel_search_part">
                            <SelectInput type="search" data={[{ name: "Грязный" }, { name: "Чистый" }]} getSelected={getSelected} />
                            <div className="carDetails_right_front_wheel_search_part_selected">
                                <img src={snow} />
                                <p>245/50 r20 nokian
                                hakkapeliitta r3 suv
                                106r xl </p>
                            </div>
                        </div>
                        <div className="carDetails_right_front_wheel_input_part">
                            <p>Уровень протектора мм</p>
                            <input />
                        </div>
                    </div> */}
                    <BackWheelBlock />
                    {/* <div className="carDetails_right_back_wheel">
                        <div className="carDetails_right_back_wheel_head">
                            <img src={carBack} alt="carBack" />
                            <p>Задние шины</p>
                        </div>
                        <div className="carDetails_right_back_wheel_search_part">
                            <SelectInput type="search" data={[{ name: "Грязный" }, { name: "Чистый" }]} getSelected={getSelected} />
                            <div className="carDetails_right_back_wheel_search_part_selected">
                                <img src={snow} />
                                <p>245/50 r20 nokian
                                hakkapeliitta r3 suv
                                106r xl </p>
                            </div>
                        </div>
                        <div className="carDetails_right_back_wheel_input_part">
                            <p>Уровень протектора мм</p>
                            <input />
                        </div>
                    </div> */}
                </div>
                <div onClick={handleNextClick} className="hiddenButton">
                    Далее
                </div>
            </div>
        </div>
    );
}

export default CarDetails;