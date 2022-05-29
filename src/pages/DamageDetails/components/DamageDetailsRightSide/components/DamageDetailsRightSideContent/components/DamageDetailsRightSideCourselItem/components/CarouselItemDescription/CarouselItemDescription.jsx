import React, {useState} from 'react';
import style from "../../DamageDetailsRightSideCarouselItem.module.css";

const CarouselItemDescription = ({ rows, placeholder, form, setForm, item }) => {

    const [text, setText] = useState("")

    const changeDescription = () => {
        setForm(prevState => ({
            ...prevState,
            name: {
                ...prevState.name,
                [item.id]: form.name ? form.name[item.id] : item.name
            },
            description: {
                ...prevState.description,
                [item.id]: text
            }
        }))
    }

    return (
        <div>
            <textarea
                rows={rows}
                defaultValue={form.description[item.id]}
                onChange={(e) => setText(e.target.value)}
                onBlur={changeDescription}
                className={style.description}
                placeholder={placeholder}
            />
        </div>
    );
};

export default CarouselItemDescription;