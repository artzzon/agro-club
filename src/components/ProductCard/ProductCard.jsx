import styles from "./ProductCard.module.scss";

const ProductCard = ({
  categoryName,
  description,
  discount,
  imgUrl,
  isLimited,
  isNew,
  name,
  price,
}) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__badges}>
        {isLimited && (
          <span className={styles.productCard__badges_limited}>Limited</span>
        )}
        {isNew && <span className={styles.productCard__badges_new}>New</span>}
      </div>
      <img src="https://i.ibb.co/m4xLJYR/Wheat-2x.png" alt="" width="116px" />
      <div className={styles.productCard__content}>
        <div className={styles.productCard__description}>
          <div className={styles.productCard__description_title}>
            <span>{categoryName}</span>
          </div>
          <div className={styles.productCard__description_head}>
            <h5>{name}</h5>
          </div>
          <div className={styles.productCard__description_body}>
            <p>{description}</p>
          </div>
        </div>
        <div className={styles.productCard__price}>
          <p>${price}</p>
          {discount && <span>Discount ${discount} per bag</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
