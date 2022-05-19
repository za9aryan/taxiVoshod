import c from "./Breadcrumbs.module.css"
import BreadcrumbsIcon from "./components/BreadcrumbsIcon/BreadcrumbsIcon";

const Breadcrumbs = ({onClick}) => (
    <div className={c.Breadcrumbs}>
        <div onClick={onClick}>
            <BreadcrumbsIcon/>
            <p>Назад</p>
        </div>
    </div>

)

export default Breadcrumbs;