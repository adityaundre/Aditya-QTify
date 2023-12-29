import React from "react";
import styles from "./Hero.module.css"
import headphones from "../../assets/vibrating-headphone 1.png"

const Hero=()=>{
    return(
        <div className={styles.hero}>
            <div>

                <h1>100 Thousands songs, ad-free</h1>
                <h1> Over thousand podcast episodes</h1>

            </div>
            <div>
                <img src={headphones} alt="headphones" width={212}/>
            </div>
        </div>


    )



}
export default Hero