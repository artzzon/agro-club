import React from "react";
import QueryService from "../../API/QueryService";
import { useFetching } from "../../hooks/useFetching";
import { CategoryContext } from "../../App";
import Loader from "../UI/loader/Loader";
import Button from "../UI/button/Button";
import styles from "./Filter.module.scss";

const Filter = () => {
  const [categories, setCategories] = React.useState([]);
  const { activeCategory, setActiveCategory } =
    React.useContext(CategoryContext);
  const [tryFetch, isLoading, error] = useFetching(async () => {
    const response = await QueryService.getCategories();
    setCategories(response.data);
  });

  const clickHandler = (e) => {
    setActiveCategory(e);
  };

  React.useEffect(() => {
    tryFetch();
  }, []);

  return (
    <div className={styles.filter}>
      <div className={styles.filter__header}>
        <img src="icons/filter_icon.svg" alt="" />
        <h3>Filters</h3>
      </div>
      <div className={styles.filter__category_status}>
        <div className={styles.filter__category}>
          <h4>CATEGORY</h4>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => clickHandler(category.type)}
                  active={
                    activeCategory === category.type ? "active" : undefined
                  }
                >
                  {category.name}
                </Button>
              ))}
            </>
          )}
        </div>
        <div className={styles.filter__status}>
          <h4>STATUS</h4>
          <div className={styles.filter__status_container}>
            <div className={styles.filter__status_checkbox}>
              <input type="checkbox" name="Limited" />
              <span>Limited</span>
            </div>
            <div className={styles.filter__status_checkbox}>
              <input type="checkbox" name="New" />
              <span>New</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
