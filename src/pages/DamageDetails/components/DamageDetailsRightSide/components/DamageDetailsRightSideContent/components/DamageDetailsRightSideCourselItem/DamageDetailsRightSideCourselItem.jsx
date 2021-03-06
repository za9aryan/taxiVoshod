import React from 'react';
import style from "./DamageDetailsRightSideCarouselItem.module.css";
import CarouselItemHeader from "./components/CarouselItemHeader/CarouselItemHeader";
import CarouselItemDescription from "./components/CarouselItemDescription/CarouselItemDescription";
import CarouselItemImageUpload from "./components/CarouselItemImageUpload/CarouselItemImageUpload";

const DamageDetailsRightSideCarouselItem = ({active, item, fileUpload, form, setForm, progress, isLoading, id, previous}) => {
    return (
        <div className={style.sliderItem}>
            <CarouselItemHeader item={item} form={form} setForm={setForm} previous={previous}/>

            <CarouselItemDescription placeholder={'Описание повреждения'} rows={25} item={item} form={form} setForm={setForm}/>

            <CarouselItemImageUpload setForm={setForm} isLoading={isLoading} form={form} fileUpload={fileUpload} active={active} progress={progress} id={id} />
        </div>
    );
};

export default DamageDetailsRightSideCarouselItem;