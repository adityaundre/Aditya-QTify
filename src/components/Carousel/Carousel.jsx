import React, { useEffect } from "react";
import { Navigation} from 'swiper';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import styles from "./Carousel.module.css"
import CarouselLN from "./CarouselLeftNavigation/CarouselLN";
import CarouselRN from "./CarouselRightNavigation/CarouselRN";


const Controls=({data})=>{
    const swiper=useSwiper();
    useEffect(()=>{
        swiper.slideTo(0)
    },[data])
    return <></>

}


const Carousel= ({data, renderComponent}) => {
    return (
        <div className={styles.wrapper}>
      <Swiper
        // install Swiper modules
        style={{padding:"0px 20px"}}
        initialSlide={0}
        modules={Navigation}
        spaceBetween={40}
        slidesPerView={"auto"}
        allowTouchMove
        >

        <Controls data={data}/>
        
        <CarouselRN/>
        <CarouselLN/>
        
        {data.map((ele)=>(<SwiperSlide>{renderComponent(ele)}</SwiperSlide>))}
        
      </Swiper>
      </div>
    );
  };
  
  export default Carousel;