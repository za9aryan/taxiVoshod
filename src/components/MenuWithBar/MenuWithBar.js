import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons'
import exit from '../../assets/img/exit.png'
import './menuWithBar.css'
import 'animate.css';

const MenuWithBar = (props) => {
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
            <Link style={{ paddingLeft: !open && "0px", justifyContent: !open && "center", border: !open && "none" }} key={title} onClick={toggleOpen} to={`${url}`} className={`${open && ""} menuWithBar_list`}>
                <FontAwesomeIcon style={{ marginRight: "5px" }} icon={open ? faArrowRight : faCircle} /> {open ? title : null}
            </Link >
        )
    }

    return (
        <div className="menuWithBar_main">
            <div onClick={toggleOpen} className="menuWithBar_burger">
                <div className="menuWithBar_burger_icon">
                    <div className="menuWithBar_burger_icon_part"></div>
                    <div className="menuWithBar_burger_icon_part"></div>
                    <div className="menuWithBar_burger_icon_part"></div>
                </div>
                <div className="menuWithBar_burger_icon_part_text">
                    {open && "Меню"}
                </div>
            </div>
            <div style={{ width: !open && "88px", borderRadius: !open && "0px" }} className="menuWithBar_list_wrapper">
                {data?.map(renderLists)}
                <Link style={{ borderRadius: !open && "0px" }} onClick={toggleOpen} to={`/`} className={`${open && ""} menuWithBar_list_exit`}>
                    <img style={{ marginRight: "5px" }} src={exit} alt="exit" /> {open && "Выход"}
                </Link >
            </div>
        </div>
    );
}

export default MenuWithBar;