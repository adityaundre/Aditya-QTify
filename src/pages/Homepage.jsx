import React from "react";
import styles from "./Homepage.module.css";
import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";

const Homepage=()=>{
    const{data}=useOutletContext();
    const{topAlbums,newAlbums,songs}=data;
    return(
        <>
        <Hero/>
        <div className={styles.wrapper}>
            <Section title="Top Albums" data={topAlbums} type="album"/>
            <Section title="New Albums" data={newAlbums} type="album"/>
            <Section title="Songs" data={songs} type="album"/>
            



        </div>
        
        
        
        </>




    )






}
export default Homepage;