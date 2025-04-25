import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ item, onclick }) => {
  return (
    <div className={styles.card}>
      <img src={item.image} className={styles.image} alt="" />
      <h2 className={styles.title}>{item.title}</h2>
      <p className={styles.summer}> Summer Collection</p>
      <span>${item.price}</span>
      <button className={styles.delete} onClick={onclick}>
        Sil
      </button>
    </div>
  );
};

export default ProductCard;
