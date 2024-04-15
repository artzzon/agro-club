import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../UI/loader/Loader";
import styles from "./Products.module.scss";
import { useFetching } from "../../hooks/useFetching";
import QueryService from "../../API/QueryService";

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [tryFetch, isLoading, error] = useFetching(async () => {
    const response = await QueryService.getAllProducts();
    setProducts(response.data);
  });

  React.useEffect(() => {
    tryFetch();
  }, []);
  console.log(products);
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
