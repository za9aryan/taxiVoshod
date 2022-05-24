import React, { useEffect, useState } from 'react';
import { MenuWithBar } from '../../components/Components';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import { useNavigate } from 'react-router-dom';
import Button from './Buttons/Button'
import './cooperationType.css'
import TransitionModal from '../CardDetails/components/TransitionModal';

function CooperationType(props) {
    const [data, setData] = useState()
    const [selected, setSelected] = useState("")
    const [showModal, setShowModal] = useState({ open: false, text: "" })
    const navigate = useNavigate()

    const getData = async () => {
        const res = await fetch("https://taxivoshod.ru/api/?page=terms")
        const resData = await res.json()
        console.log(resData);
        setData(resData.list)
    }

    useEffect(() => {
        getData()
    }, [])

    const renderButtons = ({ name, id }) => {
        console.log(name, id);
        console.log(selected);
        return <span onClick={() => setSelected(id)}><Button key={id} title={name} color={selected === id ? "primary" : "second"} /></span>
    }

    const handlerBreadcrumbsClick = () => {
        navigate("/driver-search")
    }

    const handleNextButton = async () => {
        if (!selected) return
        try {
            let formData = new FormData();
            formData.append('term_id', selected);
            const res = await fetch("https://taxivoshod.ru/api/?page=terms", {
                method: "POST",
                body: formData
            })
            const resData = await res.json()
            console.log(resData);
            if (resData.success) {
                navigate('/second-terms')
            } else {
                setShowModal({ open: true, text: resData.message })
            }
        } catch (e) {
            setShowModal({ open: true, text: e.message })
        }

    }

    return (
        <div className="cooperationType_main">
            {showModal?.open && <TransitionModal modal={showModal} setClose={() => { setShowModal({ open: false, message: "" }) }} />}
            <MenuWithBar />
            <div className="cooperationType_breadcrumbs">
                <Breadcrumbs onClick={handlerBreadcrumbsClick} />
                <h3 className={"cooperationType_h3"}>УСЛОВИЯ РАБОТЫ</h3>
            </div>
            <div className="cooperationType_content">
                <div className="cooperationType_content_title">
                    Выберите условия работы водителя
                </div>
                <div className="cooperationType_content_buttons">
                    {data && data.map(renderButtons)}
                    {/* <Button title={"50/50"} color={"primary"} />
                    <Button title={"70/30"} color={"second"} />
                    <Button title={"Аренда посуточная"} color={"primary"} />
                    <Button title={"Аренда почасовая"} color={"primary"} /> */}
                </div>

            </div>
            <div onClick={handleNextButton} className="cooperationType_nextButton">
                <Button title="ДАЛЕЕ" color={selected ? "primary" : "disable"} />
            </div>
        </div>
    );
}

export default CooperationType;