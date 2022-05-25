import c from "./Cars.module.css"

import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Main from "./components/Main/Main";
import Button from "./components/Buttons/Button";
import { MenuWithBar } from "../../components/Components";
import { useNavigate } from 'react-router-dom'

const Cars = () => {
    const navigate = useNavigate()

    const handlerBreadcrumbsClick = () => {
        console.log("Click handlerBreadcrumbsClick")
        navigate("/")
    }

    return (
        <>
            <MenuWithBar />
            <div className={c.MainContainer}>
                <Breadcrumbs onClick={() => handlerBreadcrumbsClick()} />
                <h3 className={c.H3}>ВНЕШНИЙ ОСМОТР АВТОМОБИЛЯ</h3>
                <Main />
                <Button />
            </div>
        </>

    );
};

export default Cars;