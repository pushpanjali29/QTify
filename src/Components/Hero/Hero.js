import React from "react";
import HeroImage from "../../assets/vibrating-headphone.png";
import styles from "./Hero.css";

function Hero() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.title}>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <img className={styles.HeroImage} src={HeroImage} alt="headphone" />
      </section>
    </div>
  );
}

export default Hero;