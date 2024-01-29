import React from 'react';
import styles from "./Hero.module.css";


function Hero() {
  return (
    <div>
        <div className={styles.hero}>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>

        <div>
            <img src={require("../../assets/hero-headphone.png")}  alt='headphones' width={212} />
        </div>
    </div>
  )
}

export default Hero;