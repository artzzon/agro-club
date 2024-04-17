import React from "react";

import styles from "./Button.module.scss";

const Button = ({ children, ...props }) => {
  return (
    <button
      className={`${styles.button} ${
        props.active !== undefined ? styles[props.active] : ""
      }`.trim()}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};

export default Button;
