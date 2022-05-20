import React from 'react';
import style from "../../DamageDetailsRightSideCarouselItem.module.css";

const CarouselItemDescription = ({rows, placeholder, form, setForm, item}) => {
    return (
        <div>
            <textarea rows={rows} defaultValue={item ? item.descr : ''} value={form.description[item.id]} onChange={(e) => setForm({
                ...form,
                name: {
                    [item.id]: form.name[item.id] || item.name
                },
                description: {
                    [item.id]: e.target.value
                }
            })} className={style.description} placeholder={placeholder}></textarea>
        </div>
    );
};

export default CarouselItemDescription;