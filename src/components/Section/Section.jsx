import React, { useEffect } from "react";
import { useState } from "react";
import styles from"./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/filters";

const Section=({title, data, filterSource, type})=>{

    const[filters,setFilters]= useState([{key:"all", label:"All"}]);
    const[selectedFilterIndex,setselectedFilterIndex]= useState(0);
    const[carouselToggle, setCarouselToggle]= useState(true);

    const handleToggle=()=>{
        setCarouselToggle((preState)=>!preState)
    }
    useEffect(()=>{
        if(filterSource){
            filterSource().then((response)=>{
                const{data} = response;
                setFilters([...filters, ...data]);
            });
        }

    },[]);

    const showFilters = filters.length > 1;
   
    const cardsToRender= data.filter((card)=>
        
            showFilters && selectedFilterIndex !==0 ? card.genre.key === filters[selectedFilterIndex].key
            : card);

    return(
        <>
        
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle}>{!carouselToggle ?"Collapse All":"Show all"}</h4>
        </div>
        {showFilters && (
            <div className={styles.filterwrapper}>
                <Filters
                filters={filters}
                selectedFilterIndex={selectedFilterIndex}
                setSelectedFilterIndex={setselectedFilterIndex}
                />
            </div>
        )}

        { data && data.length === 0 ? (
            <CircularProgress/>
        ):(
            <div className={styles.cardWrapper}>
                {
                    !carouselToggle ?(
                        <div className={styles.wrapper}>
                            {cardsToRender.map((ele) => (
                                <Card key={ele.id} data={ele} type={type}/>
                            ))}  
                        </div>
                    ):(
                        <Carousel data={cardsToRender}
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