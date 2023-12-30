import React from "react";
import { useState } from "react";
import styles from"./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";

const Section=({title, data, type})=>{
    const[carouselToggle, setCarouselToggle]=useState(true);

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
                                <Card key={data.id}data={ele} type={type}/>
                            ))}
                        </div>
                    ):(
                        //carousal
                        null
                    )
                }
            </div>
        )}
        
        
        </>


    )



}
export default Section