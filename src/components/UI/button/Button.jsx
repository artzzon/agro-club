import styles from "./Button.module.scss";

const Button = ({ children, ...props }) => {
  return (
    <button
      className={`${styles.button} ${
        props.active !== undefined ? styles[props.active] : ""
      }`.trim()}
    >
      {children}
    </button>
  );
};

export default Button;
