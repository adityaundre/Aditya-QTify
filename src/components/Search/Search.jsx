import React from "react";
import styles from "./Search.module.css";
import {ReactComponent as SearchIcon} from "../../assets/search-icon.svg";

const Search=({placeholder})=>{

    const onsubmit=(e)=>{
        e.preventDefault();
    }

    return(
        <form onSubmit={onsubmit} className={styles.wrapper}>
            <input className={styles.search} placeholder={placeholder} required/>
            <button className={styles.searchButton} type="submit">
                <SearchIcon/>
            </button>

        </form>
    )

}
export default Search