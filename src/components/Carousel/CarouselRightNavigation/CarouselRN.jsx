import React, { useEffect, useState } from "react";
import { useSwiper} from "swiper/react";
import styles from "./CarouselRN.module.css"
import {ReactComponent as RightArrow} from "../../../assets/rightArrow.svg"

const CarouselRN=()=>{
    const swiper=useSwiper();
    const[isEnd, setIsEnd]=useState(swiper.isEnd)

    useEffect(() => {
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd)
        })
    },[])

    return(

        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}




        </div>






    )





}
export default CarouselRN;
