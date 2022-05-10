import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import ellipse from '../../assets/img/Ellipse.png';
import selectedellipse from '../../assets/img/selected.png'
import './selectInput.css'

const SelectInput = ({ data, getSelected = () => { }, type = "" }) => {

    const [open, setOpen] = useState(false)
    const [input, setInput] = useState("")
    // const [data, setData] = useState(["clear", "wet", "damage"])
    const [searchData, setSearchData] = useState([...data])
    const [selected, setSelected] = useState()

    const openList = () => {
        setOpen(!open)
    }

    const handleSelect = async (name) => {
        setSelected(name)
        await setInput(name)
        setOpen(false)
        getSelected(name)
    }


    useEffect(() => {
        if (type !== "search") return
        const newArr = []
        data.forEach(item => {
            if (item.name.toLowerCase().includes(input.toLowerCase())) {
                newArr.push(item)
            }
        })
        setSearchData([...newArr])
        if (searchData.length && input) {
            setOpen(true)
        }
    }, [input])

    const renderList = ({ name }) => {
        return (
            <div key={name} onClick={() => handleSelect(name)} className="selectInput_input_list_item">
                {/* <img src={selected === name ? selectedellipse : ellipse} /> */}
                <h4>{name}</h4>
            </div>
        )
    }

    return (
        <div className="selectInput_input_part">
            <input disabled={type !== "search"} onChange={(e) => { setInput(e.target.value) }} value={input} placeholder="Выбрать" className="selectInput_input" />
            <FontAwesomeIcon className="selectInput_arrow" onClick={openList} color={"white"} icon={!open ? faAngleDown : faAngleUp} />
            {open &&
                <div style={{ paddingTop: open && "25px", paddingBottom: open && "25px" }} className="selectInput_input_wrapper">
                    <div className="selectInput_input_list">
                        {searchData?.map(renderList)}
                        {searchData.length === 0 && (
                            <div className="selectInput_input_list_item">
                                <img style={{ visibility: "hidden" }} src={ellipse} alt="ellipse" />
                                <h4>Нет машин для показа!</h4>
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    )
}

export default SelectInput