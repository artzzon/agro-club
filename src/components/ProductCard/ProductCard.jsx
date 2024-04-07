import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <img src="https://i.ibb.co/m4xLJYR/Wheat-2x.png" alt="" width="116px" />
      <div className={styles.productCard__content}>
        <div className={styles.productCard__description}>
          <div className={styles.productCard__description_title}>
            <span>Canola</span>
          </div>
          <div className={styles.productCard__description_head}>
            <h5>CS2300</h5>
          </div>
          <p>Roundup Ready Canola Hybrid</p>
          <div className={styles.productCard__description_badges}>
            <span className={styles.productCard__description_badges_limited}>
              Limited
            </span>
            <span className={styles.productCard__description_badges_new}>
              New
            </span>
          </div>
        </div>
        <div className={styles.productCard__price}>
          <p>$34.00</p>
          <span>Discount $2 per bag</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
