import React from 'react';
import style from "./DamageDetailsRightSideCarouselItem.module.css";
import CarouselItemHeader from "./components/CarouselItemHeader/CarouselItemHeader";
import CarouselItemDescription from "./components/CarouselItemDescription/CarouselItemDescription";
import CarouselItemImageUpload from "./components/CarouselItemImageUpload/CarouselItemImageUpload";

const DamageDetailsRightSideCarouselItem = ({active, item, fileUpload, images, setImages}) => {
    return (
        <div key={active}>
            <div className={style.sliderItem}>
               <CarouselItemHeader item={item} />

               <CarouselItemDescription placeholder={'Описание повреждения'} rows={25}/>

               <CarouselItemImageUpload active={active} fileUpload={fileUpload} images={images} setImages={setImages} />
            </div>
        </div>
    );
};

export default DamageDetailsRightSideCarouselItem;