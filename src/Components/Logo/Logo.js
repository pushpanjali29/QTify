import React from "react";
import styles from "./Logo.css";
import LogoImg from "../../assets/logo.png";

function Logo() {
  return (
    <div className={styles.logoDiv}>
      <img src={LogoImg} width={67} alt="logo" />
    </div>
  );
}

export default Logo;