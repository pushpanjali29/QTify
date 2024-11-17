import React from "react";
import styles from "./Button.css";

function Button({ children }) {
  return (
    <div>
      <button className={styles.btn}>{children}</button>
    </div>
  );
}

export default Button;