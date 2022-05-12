import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import ellipse from '../../assets/img/Ellipse.png';
import selectedellipse from '../../assets/img/selected.png'
import './driverSearch.css'
import { MenuWithBar } from '../../components/Components';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs'

function DriverSearch(props) {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState("")
    const [data, setData] = useState([])
    const [searchData, setSearchData] = useState([])
    const [selected, setSelected] = useState()


    const getData = async () => {
        // const res = await fetch("https://mechanic.taxivoshod.ru/api/?page=cars")
        // const resData = await res.json()
        // setData(resData.list)
        // setSearchData(resData.list)
    }

    useEffect(() => {
        if (data.length) return
        getData()
    }, [])

    useEffect(() => {
        const newArr = []
        data.forEach(item => {
            if (item.name.toLowerCase().includes(input.toLowerCase())) {
                newArr.push(item)
            }
        })
        setSearchData([...newArr])
        if (searchData.length) {
            setOpen(true)
        }
    }, [input])

    const openList = () => {
        setOpen(!open)
    }

    const handleSelect = async (name) => {
        setSelected(name)

        await setInput(name)
        setOpen(false)
    }

    const renderList = ({ name }) => {
        return (
            <div key={name} onClick={() => handleSelect(name)} className="driverSearch_input_list_item">
                <img src={selected === name ? selectedellipse : ellipse} alt="ellipse" />
                <h4>{name}</h4>
            </div>
        )
    }

    const handleNextButton = () => {
        if (!selected) return
        navigate('/damage')
    }

    const handlerBreadcrumbsClick = () => {
        navigate(-1)
    }

    return (
        <div className="driverSearch_main">
            <MenuWithBar />
            <Breadcrumbs onClick={handlerBreadcrumbsClick} />
            <div className="driverSearch_blur">

            </div>
            <div className="driverSearch_title">
                Выберите водителя из списка
        </div>
            <div className="driverSearch_input_part">
                <input onChange={(e) => { setInput(e.target.value) }} value={input} placeholder="Поиск" className="driverSearch_input" />
                <FontAwesomeIcon className="driverSearch_arrow" onClick={openList} color={"white"} icon={!open ? faAngleDown : faAngleUp} />
                {open &&
                    <div style={{ paddingTop: open && "25px", paddingBottom: open && "25px" }} className="driverSearch_input_wrapper">
                        <div className="driverSearch_input_list">
                            {searchData?.map(renderList)}
                            {searchData.length === 0 && (
                                <div className="driverSearch_input_list_item">
                                    <img style={{ visibility: "hidden" }} src={ellipse} alt="ellipse" />
                                    <h4>Ничего не найдено!</h4>
                                </div>
                            )}
                        </div>
                    </div>
                }
            </div>
            {selected && !open && <div className="driverSearch_SelectedItem_part">
                <h5>Выбран водитель</h5>
                <h3>{selected}</h3>
            </div>}
            <div className="driverSearch_button_part">
                <div onClick={handleNextButton} style={{ backgroundColor: selected && "#F5C257" }} className="driverSearch_button">
                    Далее
            </div>
            </div>
        </div>
    );
}

export default DriverSearch;