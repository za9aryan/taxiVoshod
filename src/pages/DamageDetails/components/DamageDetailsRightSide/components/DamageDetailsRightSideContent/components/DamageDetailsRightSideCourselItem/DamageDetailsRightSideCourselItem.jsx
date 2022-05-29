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

            <CarouselItemImageUpload
                form={form}
                setForm={setForm}
                isLoading={isLoading}
                fileUpload={fileUpload}
                active={active}
                progress={progress}
                id={id}
                item={item}
            />
        </div>
    );
};

export default DamageDetailsRightSideCarouselItem;