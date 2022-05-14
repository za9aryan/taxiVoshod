import React from 'react';
import { RangeSlider } from '../../../components/Components';
import fuelIcon from '../../../assets/img/fuel.png'
import ellipse from '../../../assets/img/Ellipse.png';
import selectedEllipse from '../../../assets/img/radioChecked.png'
import { useDispatch, useSelector } from "react-redux";
import { putCarDetailsAction } from '../../../redux/actions/Action'

function FuelPart(props) {

    const dispatch = useDispatch()
    const { fuel, fuel_liter_limit, fuel_type, fuel_km_limit } = useSelector(state => state.reducer.carDetails)


    const handleIconClick = (e) => {
        if (e.target.getAttribute("data") === fuel_type) return
        dispatch(putCarDetailsAction({
            fuel_type: e.target.getAttribute("data")
        }))
    }

    const getValue = (e) => {
        const val = e.target.value
        dispatch(putCarDetailsAction({
            fuel: fuel_type === "liter" ? val : (val * 80 / 500)
        }))
    }

    return (
        <div className="carDetails_fuel">
            <div className="carDetails_fuel_fuel_part">
                <p>Топливо</p>
                <img src={fuelIcon} alt="fuel" />
            </div>
            <div className="carDetails_fuel_range_part">
                <div className="carDetails_fuel_range_part_radio_part">
                    <div onClick={handleIconClick} data="liter" className="carDetails_fuel_range_part_radio_part_in_litr">
                        <img data="liter" src={fuel_type === "liter" ? selectedEllipse : ellipse} alt="ellipse" />
                                    В литрах
                                </div>
                    <div onClick={handleIconClick} data="km" className="carDetails_fuel_range_part_radio_part_in_km">
                        <img data="km" src={fuel_type === "km" ? selectedEllipse : ellipse} alt="ellipse" />
                                    На км
                                </div>
                </div>
                <div>
                    <div>
                        {fuel_liter_limit && <RangeSlider getValue={getValue} max={fuel_type === "liter" ? Number(fuel_liter_limit) : Number(fuel_km_limit)} value={fuel_type === "liter" ? fuel.toFixed(0) : (fuel / fuel_liter_limit * fuel_km_limit).toFixed(0)} />}
                    </div>
                    <div className="carDetails_fuel_range_part_min_max">
                        <div>
                            1
                        </div>
                        <div>
                            {fuel_type === "liter" ? fuel_liter_limit : fuel_km_limit}
                        </div>
                    </div>

                </div>

            </div>
            <div className="carDetails_fuel_text_part">
                <h3>{fuel_type === "liter" ? fuel.toFixed(0) : (fuel / fuel_liter_limit * fuel_km_limit).toFixed(0)}</h3>
                <h4> {fuel_type === "liter" ? "ЛИТРОВ" : "KM"}</h4>
            </div>

        </div>
    );
}

export default FuelPart;