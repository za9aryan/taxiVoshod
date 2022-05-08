import React from 'react';
import './carDetails.css'
import { MenuWithBar, RangeSlider, SelectInput } from '../../components/Components';
import fuel from '../../assets/img/fuel.png'
import Breadcrumbs from './Breadcrumbs/Breadcrumbs'
import block1 from '../../assets/img/block1.png'
import block2 from '../../assets/img/block2.png'
import block3 from '../../assets/img/block3.png'
import block4 from '../../assets/img/block4.png'
import carFront from '../../assets/img/carFront.png'
import carBack from '../../assets/img/carBack.png'

import ellipse from '../../assets/img/Ellipse.png';
import selectedellipse from '../../assets/img/selected.png'

function CarDetails(props) {

    const handlerBreadcrumbsClick = () => {
        console.log("Click handlerBreadcrumbsClick")
    }

    const getSelected = (name) => {
        console.log(name);
    }


    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#EDF2FF" }}>
            <MenuWithBar />
            <div className="carDetails_main">
                <div className="carDetails_left">
                    <div>
                        <Breadcrumbs onClick={handlerBreadcrumbsClick} />
                        <h3 className={"carDetails_h3"}>ХАРАКТЕРИСТИКИ АВТОМОБИЛЯ</h3>
                    </div>
                    <div className="carDetails_fuel">
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
                                        min
                                </div>
                                    <div>
                                        max
                                </div>
                                </div>

                            </div>

                        </div>
                        <div className="carDetails_fuel_text_part">
                            <h3>20</h3>
                            <h4>ЛИТРОВ</h4>
                        </div>

                    </div>
                    <div className="carDetails_block3">
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
                                <SelectInput data={[{ name: "asd" }, { name: "adaweqw" }]} getSelected={getSelected} />
                            </div>
                        </div>
                        <div className="carDetails_block">
                            <img src={block3} alt="block3" />
                            <div>
                                <p>Чистота салона</p>
                            </div>
                            <div>
                                <SelectInput data={[{ name: "asdawdawd" }, { name: "987" }]} getSelected={getSelected} />
                            </div>
                        </div>
                    </div>
                    <div className="carDetails_notepad">
                        <div className="carDetails_notepad_title">
                            Дополнительные замечания:
                        </div>
                        <div className="carDetails_notepad_input">
                            <textarea rows="5" type="text" />
                        </div>
                    </div>
                    <div className="carDetails_button">
                        Далее
                    </div>
                </div>
                <div className="carDetails_right">
                    <img className="carDetails_right_head_img" src={block4} alt="block4" />
                    <div className="carDetails_right_front_wheel">
                        <div className="carDetails_right_front_wheel_head">
                            <img src={carFront} alt="carFront" />
                            <p>Передние шины</p>
                        </div>
                        <div className="carDetails_right_front_wheel_search_part">
                            <SelectInput type="search" data={[{ name: "asdawdawd" }, { name: "987" }]} getSelected={getSelected} />
                        </div>
                        <div className="carDetails_right_front_wheel_input_part">

                        </div>
                    </div>
                    <div className="carDetails_right_back_wheel">
                        <div className="carDetails_right_back_wheel_head">
                            <img src={carBack} alt="carBack" />
                            <p>Задние шины</p>
                        </div>
                        <div className="carDetails_right_back_wheel_search_part">
                            <SelectInput type="search" data={[{ name: "asdawdawd" }, { name: "987" }]} getSelected={getSelected} />
                        </div>
                        <div className="carDetails_right_back_wheel_input_part">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarDetails;