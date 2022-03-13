import React from 'react'
import styles from '../styling/footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.footer1}>
            <div className={styles.secA}>
                <div className={styles.sec1}>
                    <p>Delivery and Returns</p>
                    <p>Store Policy</p>
                    <p>Payment Methods</p>
                </div>
                <div className={styles.sec2}>
                    <p>Contact</p>
                    <p>Tel: 0741261983</p>
                </div>
                <div className={styles.sec3}>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Pinterest</p>
                </div>
            </div>
        </div>
        <div className={styles.footer2}>
            <p>@2022 by Purity Gwaro. </p>
        </div>
    </div>
  )
}
