import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import exit from '../../assets/img/exit.png'
import './menu.css'
import 'animate.css';

const Menu = (props) => {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState()

    const toggleOpen = () => {
        setOpen(!open)
    }

    const getData = async () => {
        const res = await fetch("https://mechanic.taxivoshod.ru/api/?page=menu")
        const resData = await res.json()
        setData(resData.list)
    }

    useEffect(() => {
        if (data) return
        getData()
    }, [])

    const renderLists = ({ title, url }) => {
        return (
            <Link key={title} onClick={toggleOpen} to={`${url}`} className={`${open && "animate__animated animate__fadeInUp"} list`}>
                <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faArrowRight} /> {title}
            </Link >
        )
    }

    return (
        <div className="menu_main">
            <div onClick={toggleOpen} className="menu_burger">
                <div className="burger_icon">
                    <div style={{ background: open && "black" }} className="burger_icon_part"></div>
                    <div style={{ background: open && "black" }} className="burger_icon_part"></div>
                    <div style={{ background: open && "black" }} className="burger_icon_part"></div>
                </div>
                <div style={{ color: open && "black" }} className="burger_icon_part_text">
                    Меню
                </div>
            </div>
            <div style={{ transform: open && "translateX(0%)" }} className="menu_list_wrapper">
                {data?.map(renderLists)}
                <Link onClick={toggleOpen} to={`/`} className={`${open && "animate__animated animate__fadeInUp"} list_exit`}>
                    <img style={{ marginRight: "5px" }} src={exit} alt="exit" /> Выход
                </Link >
            </div>
        </div>
    );
}

export default Menu;