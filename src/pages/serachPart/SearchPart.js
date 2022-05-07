import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import ellipse from '../../assets/img/Ellipse.png';
import selectedellipse from '../../assets/img/selected.png'
import './searchPart.css'

const SearchPart = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState("")
    const [data, setData] = useState([])
    const [searchData, setSearchData] = useState([])
    const [selected, setSelected] = useState()


    const getData = async () => {
        const res = await fetch("https://mechanic.taxivoshod.ru/api/?page=cars")
        const resData = await res.json()
        setData(resData.list)
        setSearchData(resData.list)
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
            <div key={name} onClick={() => handleSelect(name)} className="searchPart_input_list_item">
                <img src={selected === name ? selectedellipse : ellipse} />
                <h4>{name}</h4>
            </div>
        )
    }

    const handleNextButton = () => {
        if (!selected) return
        navigate('/damage')
    }

    return (
        <div className="searchPart_main">
            <div className="searchPart_blur">

            </div>
            <div className="searchPart_title">
                Выберите автомобиль из списка
            </div>
            <div className="searchPart_input_part">
                <input onChange={(e) => { setInput(e.target.value) }} value={input} placeholder="Поиск" className="searchPart_input" />
                <FontAwesomeIcon className="searchPart_arrow" onClick={openList} color={"white"} icon={!open ? faAngleDown : faAngleUp} />
                {open &&
                    <div style={{ paddingTop: open && "25px", paddingBottom: open && "25px" }} className="searchPart_input_wrapper">
                        <div className="searchPart_input_list">
                            {searchData.map(renderList)}
                            {searchData.length === 0 && (
                                <div className="searchPart_input_list_item">
                                    <img style={{ visibility: "hidden" }} src={ellipse} />
                                    <h4>Нет машин для показа!</h4>
                                </div>
                            )}
                        </div>
                    </div>
                }
            </div>
            {selected && !open && <div className="searchPart_SelectedItem_part">
                <h5>Выбран автомобиль</h5>
                <h3>{selected}</h3>
            </div>}
            <div className="searchPart_button_part">
                <div onClick={handleNextButton} style={{ backgroundColor: selected && "#F5C257" }} className="searchPart_button">
                    Далее
                </div>
            </div>
        </div>
    );
};

export default SearchPart;