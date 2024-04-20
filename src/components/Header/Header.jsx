import Input from "../UI/input/Input";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1
        className={styles.header__logo}
        onClick={() => window.location.reload()}
      >
        Products
      </h1>
      <Input />
    </div>
  );
};

export default Header;
