import React from 'react';
import style from "./DamageDetailsRightSideCarouselItem.module.css";
import CarouselItemHeader from "./components/CarouselItemHeader/CarouselItemHeader";
import CarouselItemDescription from "./components/CarouselItemDescription/CarouselItemDescription";
import CarouselItemImageUpload from "./components/CarouselItemImageUpload/CarouselItemImageUpload";

const DamageDetailsRightSideCarouselItem = ({active, item, fileUpload, form, setForm}) => {
    return (
        <div key={active}>
            <div className={style.sliderItem}>
               <CarouselItemHeader item={item} form={form} setForm={setForm} />

               <CarouselItemDescription placeholder={'Описание повреждения'} rows={25} item={item} form={form} setForm={setForm}/>

               <CarouselItemImageUpload setForm={setForm} item={item} form={form} fileUpload={fileUpload} />
            </div>
        </div>
    );
};

export default DamageDetailsRightSideCarouselItem;