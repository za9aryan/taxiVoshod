import c from "./Heading.module.css"

const Heading = ({isActive = "right", setIsActive}) => {

    const heading = [
        {label: "right", name: "Правая сторона"},
        {label: "left", name: "Левая сторона"},
        {label: "back", name: "Задняя часть"},
        {label: "front", name: "Передняя часть"}
    ]

    const handlerChangeActive = (label) => {
        setIsActive(label)
    }

    return (
        <div className={c.Heading}>
            <div className={c.HeadingItem}>
                {heading.map(({label, name}, index) => {
                    if(index < 2){
                        return (
                            <button
                                key={label + name + index}
                                className={`${c.Box} ${isActive === label ? c.Active : ""}`}
                                onClick={() => handlerChangeActive(label)}
                            >
                                {name}
                            </button>
                        )
                    }
                    return null
                })}
            </div>
            <div className={c.HeadingItem}>
                {heading.map(({label, name}, index) => {
                    if(index > 1){
                        return (
                            <button
                                key={label + name + index}
                                className={`${c.Box} ${isActive === label ? c.Active : ""}`}
                                onClick={() => handlerChangeActive(label)}
                            >
                                {name}
                            </button>
                        )
                    }
                    return null
                })}
            </div>
        </div>
    );
};

export default Heading;