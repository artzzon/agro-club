import React from "react";
import { SearchContext } from "../../../App";
import styles from "./Input.module.scss";

const Input = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.input_container}>
      <img className={styles.icon} src="/icons/search_icon.svg" alt="" />
      <input
        className={styles.input}
        type="text"
        placeholder="Search among product"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
