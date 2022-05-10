import React, { useEffect, useState } from 'react';
import snow from '../../../assets/img/snow.png'
import sun from '../../../assets/img/sun.png'
import carFront from '../../../assets/img/carFront.png'
import { SelectInput } from '../../../components/Components';
import { useDispatch, useSelector } from "react-redux";
import { putCarDetailsAction } from '../../../redux/actions/Action'

function FrontWheelBlock(props) {

    const dispatch = useDispatch()
    const { tire_front, tire_front_height, tires } = useSelector(state => state.reducer.carDetails)

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
        dispatch(putCarDetailsAction({ tire_front: index }))
    }

    const handleTireHeightChange = (e) => {
        dispatch(putCarDetailsAction({ tire_front_height: e.target.value }))
    }

    return (
        <div className="carDetails_right_front_wheel">
            <div className="carDetails_right_front_wheel_head">
                <img src={carFront} alt="carFront" />
                <p>Передние шины</p>
            </div>
            <div className="carDetails_right_front_wheel_search_part">
                <SelectInput type="search" data={tiresData} getSelected={getSelected} />
                <div className="carDetails_right_front_wheel_search_part_selected">
                    <img src={tires?.[`${tire_front}`]?.is_winter ? snow : sun} />
                    <p>{tires?.[`${tire_front}`]?.name}</p>
                </div>
            </div>
            <div className="carDetails_right_front_wheel_input_part">
                <p>Уровень протектора мм</p>
                <input value={tire_front_height} onChange={handleTireHeightChange} />
            </div>
        </div>
    );
}

export default FrontWheelBlock;