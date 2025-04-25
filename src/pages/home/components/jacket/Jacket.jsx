import React from "react";
import styles from "./Jacket.module.css";

const Jacket = () => {
  return (
    <div className={styles.jacketall}>
      <div className={styles.image}>
        <img
          src="https://preview.colorlib.com/theme/dealers/images/model_woman_1.png"
          alt=""
        />
      </div>
      <div className={styles.jacket}>
        <span className={styles.span}>#New Summer Collection 2019</span>
        <h1 className={styles.top}>JACKET</h1>
        <div className={styles.buttons}>
          <button className={styles.buttonone}>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Jacket;
