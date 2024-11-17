import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import styles from "./SearchBar.css";

const SearchBar = ({ search }) => {
  return (
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder={search} />
      <button className={styles.btn} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;