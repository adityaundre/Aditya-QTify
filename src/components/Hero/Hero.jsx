import React from "react";
import styles from "./Hero.module.css"
import headphones from "../../assets/vibrating-headphone 1.png"

const Hero=()=>{
    return(
        <div className={`${styles.hero} ${styles.heroContainer}`}>
        <div>
          <div className={styles.heroText}>
            <h1>100 Thousand songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
          </div>
          <img src={headphones} alt="headphones" width={112}/>
        </div>
      </div>
      


    )



}
export default Hero