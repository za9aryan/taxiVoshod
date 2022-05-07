import React, { useReducer, useState } from 'react';
import './start.css'
import rec from '../../assets/img/Rectangle.png'
import logo from '../../assets/img/mainLogo.svg'

import {Menu} from '../../components/Components';
import {SearchPart} from '../Pages';

const Start = () => {

    const [searchOpen, setSearchOpen] = useState(false)

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
            <div onClick={() => setSearchOpen(prevState => !prevState)} className="start_button">
                ОСМОТР АВТОМОБИЛЯ
            </div>
            {searchOpen && <SearchPart />}
        </div>
    )
}

export default Start