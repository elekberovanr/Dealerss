import React from "react";
import styles from "./AdminCard.module.css";

const AdminCard = ({ item, onDelete, onEdit }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{item.name}</h2>
      <span>{item.description}</span>
      <div className={styles.buttons}>
        <button className={styles.delete} onClick={onDelete}>
          Sil
        </button>
        <button className={styles.edit} onClick={onEdit}>
          Düzəliş Et
        </button>

      </div>
    </div>
  );
};

export default AdminCard;
