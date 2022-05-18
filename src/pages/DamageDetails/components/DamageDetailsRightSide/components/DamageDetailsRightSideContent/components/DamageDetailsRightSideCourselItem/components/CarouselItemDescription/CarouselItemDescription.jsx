import React from 'react';
import style from "../../DamageDetailsRightSideCarouselItem.module.css";

const CarouselItemDescription = ({rows, placeholder, form, setForm, item}) => {
    return (
        <div>
            <textarea rows={rows} defaultValue={item.descr} value={form.description[item.id]} onChange={(e) => setForm({
                ...form,
                description: {
                    [item.id]: e.target.value
                }
            })} className={style.description} placeholder={placeholder}></textarea>
        </div>
    );
};

export default CarouselItemDescription;