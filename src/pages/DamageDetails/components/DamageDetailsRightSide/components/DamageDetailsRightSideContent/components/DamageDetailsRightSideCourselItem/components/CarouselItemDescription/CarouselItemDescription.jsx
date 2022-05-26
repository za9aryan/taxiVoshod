import React from 'react';
import style from "../../DamageDetailsRightSideCarouselItem.module.css";

const CarouselItemDescription = ({ rows, placeholder, form, setForm, item }) => {

    return (
        <div>
            <textarea rows={rows} defaultValue={form.description[item.id]} onChange={(e) => setForm({
                ...form,
                name: {
                    ...form.name, [item.id]: item.name
                },
                description: {
                    ...form.description,
                    [item.id]: e.target.value
                }
            })} className={style.description} placeholder={placeholder}></textarea>
        </div>
    );
};

export default CarouselItemDescription;