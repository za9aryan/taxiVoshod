import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons'
import exit from '../../assets/img/exit.png'
import './menuWithBar.css'
import 'animate.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuDataEffect } from '../../redux/effects/Effect';

const MenuWithBar = (props) => {
    const state = useSelector(state => state.reducer.menu)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [data, setData] = useState()

    const toggleOpen = () => {
        setOpen(!open)
    }


    useEffect(() => {
        if (state?.list?.length) return
        dispatch(getMenuDataEffect())
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
                    <div className="menuWithBar_burger_icon_part" />
                    <div className="menuWithBar_burger_icon_part" />
                    <div className="menuWithBar_burger_icon_part" />
                </div>
                <div className="menuWithBar_burger_icon_part_text">
                    {open && "Меню"}
                </div>
            </div>
            <div style={{ width: !open && "88px", borderRadius: !open && "0px" }} className="menuWithBar_list_wrapper">
                {state?.list?.map(renderLists)}
                <Link style={{ borderRadius: !open && "0px" }} onClick={toggleOpen} to={`${state.list?.Logout || '/'}`} className={`${open && ""} menuWithBar_list_exit`}>
                    <img style={{ marginRight: "5px" }} src={exit} alt="exit" /> {open && "Выход"}
                </Link >
            </div>
        </div>
    );
}

export default MenuWithBar;