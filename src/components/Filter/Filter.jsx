import Button from "../UI/button/Button";
import styles from "./Filter.module.scss";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.filter__header}>
        <img src="icons/filter_icon.svg" alt="" />
        <h3>Filters</h3>
      </div>
      <div className={styles.filter__category_status}>
        <div className={styles.filter__category}>
          <h4>CATEGORY</h4>
          <Button>All</Button>
          <Button>Canola</Button>
          <Button>Corn</Button>
          <Button>Oats</Button>
          <Button>Wheat</Button>
          <Button>Soybeans</Button>
          <Button>Barley</Button>
        </div>
        <div className={styles.filter__status}>
          <h4>STATUS</h4>
          <input type="checkbox" name="Limited" />
          <span>Limited</span>
          <input type="checkbox" name="New" />
          <span>New</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
