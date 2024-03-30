import styles from "./Input.module.scss";

const Input = () => {
  return (
    <div className={styles.input_container}>
      <img
        className={styles.icon}
        src="../../../public/search_icon.svg"
        alt=""
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Search among products"
      />
    </div>
  );
};

export default Input;
