import React, { useEffect, useState } from 'react';
import snow from '../../../assets/img/snow.png'
import sun from '../../../assets/img/sun.png'
import carBack from '../../../assets/img/carBack.png'
import { SelectInput } from '../../../components/Components';
import { useDispatch, useSelector } from "react-redux";
import { putCarDetailsAction } from '../../../redux/actions/Action'

function BackWheelBlock(props) {

    const dispatch = useDispatch()
    const { tire_rear, tire_rear_height, tires } = useSelector(state => state.reducer.carDetails)

    const [tiresData, setTiresData] = useState([])

    useEffect(() => {
        if (!tires) return
        const tiresArr = []
        Object.keys(tires).forEach((el) => tiresArr.push(tires[el]))
        setTiresData([...tiresArr])
    }, [tires])

    const getSelected = (name) => {
        let index;
        Object.keys(tires).forEach((el) => tires[el].name === name && (index = el))
        dispatch(putCarDetailsAction({ tire_rear: index }))
    }

    const handleTireHeightChange = (e) => {
        dispatch(putCarDetailsAction({ tire_rear_height: e.target.value }))
    }

    return (
        <div className="carDetails_right_back_wheel">
            <div className="carDetails_right_back_wheel_head">
                <img src={carBack} alt="carBack" />
                <p>Задние шины</p>
            </div>
            <div className="carDetails_right_back_wheel_search_part">
                <SelectInput type="search" data={tiresData} getSelected={getSelected} />
                <div className="carDetails_right_back_wheel_search_part_selected">
                    <img src={tires[`${tire_rear}`].is_winter ? snow : sun} />
                    <p>{tires[`${tire_rear}`]?.name}</p>
                </div>
            </div>
            <div className="carDetails_right_back_wheel_input_part">
                <p>Уровень протектора мм</p>
                <input value={tire_rear_height} onChange={handleTireHeightChange} />
            </div>
        </div>
    );
}

export default BackWheelBlock;