import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <img src="https://i.ibb.co/m4xLJYR/Wheat-2x.png" alt="" width="116px" />
      <div className={styles.productCard__content}>
        <div className={styles.productCard__description}>
          <span>Canola</span>
          <h5>CS2300</h5>
          <p>Roundup Ready Canola Hybrid</p>
          <div className={styles.productCard__description_badges}>
            <span>Limited</span>
            <span>New</span>
          </div>
        </div>
        <div className={styles.productCard__price}>
          <h6>$34.00</h6>
          <span>Discount $2 per bag</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
