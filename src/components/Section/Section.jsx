import React from "react";
import { useState } from "react";
import styles from"./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Section=({title, data,type})=>{
    const[carouselToggle, setCarouselToggle]=useState(false);

    const handleToggle=()=>{
        setCarouselToggle((preState)=>!preState)
    }

    return(
        <>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle}>{!carouselToggle ?"Collapse All":"Show all"}</h4>
        </div>
        { data && data.length === 0 ? (
            <CircularProgress/>
        ):(
            <div className={styles.cardWrapper}>
                {
                    !carouselToggle ?(
                        <div className={styles.wrapper}>
                            {data && data.map((ele) => (
                                <Card key={data.id} data={ele} type={type}/>
                            ))}  
                        </div>
                    ):(
                        <Carousel data={data}
                        renderComponent={(data)=><Card data={data} type={type}/>}
                        />
                        
                    )
                }
            </div>
        )}
        
        
        </>


    )



}
export default Section