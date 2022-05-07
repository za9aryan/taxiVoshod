import React, { useReducer, useState } from 'react';
import './start.css'
import rec from '../../assets/img/Rectangle.png'
import logo from '../../assets/img/mainLogo.svg'
import rotateReducer from '../../redux/reducers/rotateReducer'
import { initialState } from '../../redux/store'

import {Menu} from '../../components/Components';
import {SearchPart} from '../Pages';

const Start = (props) => {

    const [searchOpen, setSearchOpen] = useState(false)
    const [condition, dispatch] = useReducer(rotateReducer, initialState)

    const click = () => {
        dispatch({
            type: "rotate",
            payload: true
        })
        setSearchOpen(!searchOpen)
    }

    console.log(condition);

    return (
        <div className="start_main">
            <Menu />
            <div className="start_head_part">
                <img src={rec} alt={"rec"} />
                <div className="start_head_part_content">
                    <img src={logo} alt={"logo"} />
                </div>
            </div>
            <div className="start_car_part">
                {/* <img src={car} alt={"car"} /> */}
            </div>
            <div onClick={click} className="start_button">
                ОСМОТР АВТОМОБИЛЯ
            </div>
            {searchOpen && <SearchPart />}
        </div>
    )
}

export default Start