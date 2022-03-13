import React from 'react'
import styles from '../styling/main.module.css'

export default function Product(props) {
  return (
    <div className={styles.products}>
        <div className={styles.product}>
            <img src={props.src}/>        
            <p>{props.productName}</p>
            <hr/>
            <p>{props.productPrice}</p>
        </div>
        <div className={styles.product}>
            <img src={props.src}/>        
            <p>{props.productName}</p>
            <hr/>
            <p>{props.productPrice}</p>
        </div>
        <div className={styles.product}>
            <img src={props.src}/>        
            <p>{props.productName}</p>
            <hr/>
            <p>{props.productPrice}</p>
        </div>
        <div className={styles.product}>
            <img src={props.src}/>        
            <p>{props.productName}</p>
            <hr/>
            <p>{props.productPrice}</p>
        </div>
    </div>
  )
}
