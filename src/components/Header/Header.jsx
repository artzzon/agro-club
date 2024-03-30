import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.header__logo}>Products</h1>
      <input
        className={styles.header__search}
        type="text"
        placeholder="Search among products"
      />
    </div>
  );
};

export default Header;
