import React from 'react'
import styles from './MadeWell.module.css'

const MadeWell = () => {
  return (
    <div className={styles.madewellall}>
        <div className={styles.madewell}>
            <h1 className={styles.top}>MADEWELL</h1>
            <span className={styles.span}>Summer Collection</span>
            <div className={styles.price}>
                <p className={styles.pricelast}>1499</p>
                <p className={styles.pricebefore}>1999</p>
            </div>
            <div className={styles.buttons}>
                <button className={styles.buttonone}>SHOP NOW</button>
                <button className={styles.buttontwo}>SHOP NOW</button>
            </div>
        </div>

        <div className={styles.image}>
            <img src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png" alt="" />
        </div>
    </div>
  )
}

export default MadeWell