import ProductCard from "../ProductCard/ProductCard";

import styles from "./Products.module.scss";

const Products = () => {
  return (
    <div className={styles.products}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Products;
