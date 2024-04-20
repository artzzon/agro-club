import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../UI/loader/Loader";
import styles from "./Products.module.scss";
import { useFetching } from "../../hooks/useFetching";
import QueryService from "../../API/QueryService";
import { FilterContext } from "../../App";

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const { activeCategory, activeStatus } = React.useContext(FilterContext);
  const [tryFetch, isLoading, error] = useFetching(async () => {
    const response = await QueryService.getAllProducts(
      activeCategory,
      activeStatus
    );
    setProducts(response.data);
  });

  React.useEffect(() => {
    tryFetch();
  }, [activeCategory, activeStatus]);

  if (!products.length) {
    return <h2 style={{ textAlign: "center" }}>No Products</h2>;
  }

  return (
    <div className={styles.products}>
      {isLoading ? (
        <Loader width={150} />
      ) : (
        products.map((product) => <ProductCard key={product.id} {...product} />)
      )}
    </div>
  );
};

export default Products;
