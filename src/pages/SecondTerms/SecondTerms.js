import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './secondTerms.css'
import { MenuWithBar } from '../../components/Components';
import TransitionModal from '../CardDetails/components/TransitionModal';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs'
import Button from './Buttons/Button'
import task from '../../assets/img/task.png'
import pencil from '../../assets/img/pencil.png'
import coin from '../../assets/img/coin.png'
import AddModal from './AddModal';

function SecondTerms(props) {
    const navigate = useNavigate()
    const [data, setData] = useState([

    ])
    const [openDate, setOpenDate] = useState(false)
    const [showEditModal, setShowEditModal] = useState({
        show: false,
        type: ""
    })
    const [showModal, setShowModal] = useState({ open: false, text: "" })


    const getData = async () => {
        const res = await fetch("https://taxivoshod.ru/api/?page=terms2")
        const resData = await res.json()
        console.log(resData);
        setData(resData)
    }

    useEffect(() => {
        getData()
    }, [])

    const handlerBreadcrumbsClick = () => {
        navigate("/cooperation-type")
    }

    console.log(data);


    const handleEditDays = () => {
        setShowEditModal({
            show: true,
            type: "days"
        })
    }

    useEffect(() => {
        if (openDate) {
            setData({
                ...data,
                days: 0
            })
        }
    }, [openDate])

    const handleEditPrice = () => {
        setShowEditModal({
            show: true,
            type: "price"
        })
    }

    function getDataFromModal(type, InputData) {
        setData({
            ...data,
            [type]: InputData
        })
    }


    const handleNextButton = async () => {
        try {
            let formData = new FormData();
            Object.keys(data).forEach(el => formData.append(el, data[el]));
            console.log(formData);
            const res = await fetch("https://taxivoshod.ru/api/?page=terms2", {
                method: "POST",
                body: formData
            })
            const resData = await res.json()
            console.log(resData);
            if (resData.success) {
                navigate('/information')
            } else {
                setShowModal({ open: true, text: resData.message })
            }
        } catch (e) {
            setShowModal({ open: true, text: e.message })
        }

    }

    return (
        <div className="secondTerms_main">
            {showEditModal.show && <AddModal modal={showEditModal.show} type={showEditModal.type} data={data} getData={getDataFromModal} setClose={() => setShowEditModal(false)} />}
            {showModal?.open && <TransitionModal modal={showModal} setClose={() => { setShowModal({ open: false, message: "" }) }} />}
            <MenuWithBar />
            <div className="secondTerms_breadcrumbs">
                <Breadcrumbs onClick={handlerBreadcrumbsClick} />
                <h3 className={"carDetails_h3"}>?????????????? ????????????</h3>
            </div>
            <div className="secondTerms_content">
                <div className="secondTerms_content_item">
                    <div className="secondTerms_content_item_left">
                        <div>
                            <img src={task} />
                        </div>
                        <div className="secondTerms_content_item_left_first_part">
                            ???????? ????????????:
                        </div>
                        <div className="secondTerms_content_item_left_second_part">
                            {!openDate ? <span><span style={{ color: "#F5C257" }}>{data.days}</span> ???????? </span> : <span style={{ fontSize: "30px", color: "#2B334F33" }}>???????????????? ????????</span>}

                            <img onClick={handleEditDays} style={{ marginLeft: "25px", cursor: "pointer", display: openDate && "none" }} src={pencil} />
                        </div>
                    </div>
                    <div className="secondTerms_content_item_right">
                        <div className="secondTerms_content_item_right_text">
                            ???????????????? ????????
                        </div>
                        <div  >
                            <input type='checkbox' className='ios8-switch ios8-switch-lg' id='checkbox-3' />
                            <label onClick={() => setOpenDate(!openDate)} style={{ cursor: "pointer" }} htmlFor='checkbox-3'></label>
                        </div>
                    </div>
                </div>
                <div className="secondTerms_content_item">
                    <div className="secondTerms_content_item_left">
                        <div>
                            <img src={coin} />
                        </div>
                        <div className="secondTerms_content_item_left_first_part">
                            ??????????????????:
                        </div>
                        <div className="secondTerms_content_item_left_second_part">
                            <span style={{ color: "#F5C257" }}>{data.price || 0}??</span> /????????

                            <img onClick={handleEditPrice} style={{ marginLeft: "25px", cursor: "pointer" }} src={pencil} />
                        </div>
                    </div>
                    <div className="secondTerms_content_item_right">
                        <div style={{ color: openDate && "#00000033" }} className="secondTerms_content_item_right_text" >
                            ??????????:
                        </div>
                        <div style={{ color: "#F5C257", visibility: openDate && "hidden" }} className="secondTerms_content_item_right_price">
                            {data.price * data.days} ??.
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={handleNextButton} className="secondTerms_nextButton">
                <Button title="??????????" color={"primary"} />
            </div>
        </div>
    );
}

export default SecondTerms;