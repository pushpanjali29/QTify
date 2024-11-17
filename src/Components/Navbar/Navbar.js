import React from "react";
import styles from "./Navbar.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <Logo />

        <SearchBar search={"Search a song of your choice"} />
        <Button children={"Give Feedback"} />
      </nav>
    </div>
  );
}

export default Navbar;