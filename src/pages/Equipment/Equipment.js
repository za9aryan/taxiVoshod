import React, { useState, useEffect } from 'react';
import { MenuWithBar } from '../../components/Components';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs'
import { useNavigate } from 'react-router-dom';
import './equipment.css'
import TransitionModal from '../CardDetails/components/TransitionModal';
import Button from './Buttons/Button'
import left from '../../assets/img/vectorLeft.png'
import right from '../../assets/img/vectorRight.png'
import recycle from '../../assets/img/recycle.png'
import AddModal from './AddModal'

function Equipment(props) {

    const navigate = useNavigate()
    const [data, setData] = useState([

    ])
    const [showModal, setShowModal] = useState({ open: false, text: "" })
    const [openAddModal, setOpenAddModal] = useState(false)

    const getData = async () => {
        const res = await fetch("https://taxivoshod.ru/api/?page=equipment")
        const resData = await res.json()
        console.log(resData);
        setData(resData.list)
    }

    useEffect(() => {
        getData()
    }, [])

    const handlerBreadcrumbsClick = () => {
        navigate(-1)
    }

    const increment = (id) => {
        let index;
        const newData = JSON.parse(JSON.stringify(data))
        newData.forEach((el, i) => el.id === id ? (index = i) : false)
        newData[index].count++
        if (newData[index].count >= 0) {
            setData(newData)
        }
    }
    const decrement = (id) => {
        let index;
        const newData = JSON.parse(JSON.stringify(data))
        newData.forEach((el, i) => el.id === id ? (index = i) : false)
        newData[index].count--
        if (newData[index].count >= 0) {
            setData(newData)
        }
    }

    const remove = (id) => {
        let index;
        const newData = JSON.parse(JSON.stringify(data))
        newData.forEach((el, i) => el.id === id ? (index = i) : false)
        delete newData[index]
        setData(newData)
    }

    const renderRows = ({ name, count, price, id }) => {
        return (
            <div key={id} className="equipment_content_table_row">
                <div className="equipment_content_table_row_list">
                    {name}
                </div>
                <div className="equipment_content_table_row_list">
                    <img onClick={() => decrement(id)} className="vector" src={left} />
                    <span style={{ margin: "0 15px" }}>{count}</span>
                    <img onClick={() => increment(id)} className="vector" src={right} />
                </div>
                <div className="equipment_content_table_row_list">
                    {price}
                </div>
                <div onClick={() => remove(id)} style={{}} className="recycle_part equipment_content_table_row_list">
                    <img src={recycle} />
                </div>
            </div>
        )
    }


    const handleNextButton = async () => {
        // if (!selected) return
        try {
            let formData = new FormData();
            data.forEach(el => formData.append(`equipment[${el.id}]`, el.count));
            console.log(formData);
            const res = await fetch("https://taxivoshod.ru/api/?page=equipment", {
                method: "POST",
                body: formData
            })
            const resData = await res.json()
            console.log(resData);
            if (resData.success) {
                navigate('/driver-search')
            } else {
                setShowModal({ open: true, text: resData.message })
            }
        } catch (e) {
            setShowModal({ open: true, text: e.message })
        }

    }


    return (
        <div className="equipment_main">

            {showModal?.open && <TransitionModal modal={showModal} setClose={() => { setShowModal({ open: false, message: "" }) }} />}
            {openAddModal && <AddModal modal={openAddModal} setClose={() => { setOpenAddModal(false) }} />}
            <MenuWithBar />
            <div className="equipment_breadcrumbs">
                <Breadcrumbs onClick={handlerBreadcrumbsClick} />
                <h3 className={"carDetails_h3"}>КОМПЛЕКТАЦИЯ</h3>
            </div>
            <div onClick={() => setOpenAddModal(true)} className="equipment_main_add_button">
                <Button title="Добавить" color={"second"} />
            </div>
            <div className="equipment_content">
                <div style={{ overflowX: "scroll", minWidth: "600px" }}>
                    <div className="equipment_content_table_head">

                        <div className="equipment_content_table_head_row complect">
                            КОМПЛЕКТАЦИЯ
                        </div>
                        <div className="equipment_content_table_head_row quantity">
                            Количество
                        </div>
                        <div className="equipment_content_table_head_row forfeit">
                            Штраф в случае утери
                            или порчи комплектующих
                        </div>
                    </div>
                    <div className="equipment_content_table_rows">
                        {data.map(renderRows)}
                    </div>
                </div>

            </div>
            <div onClick={handleNextButton} className="equipment_nextButton">
                <Button title="ДАЛЕЕ" color={"primary"} />
            </div>
        </div>
    );
}

export default Equipment;