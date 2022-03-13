import React from 'react'
import About from './About'
import styles from '../styling/main.module.css'
import Product from './Product'
import image1 from '../images/img1.jpg'

export default function Main() {
  return (
    <div>
      <div className={styles.main}>
        <Product src={image1} productName='product1' productPrice='54$'/>
      </div>
      <About/> 
    </div>
  )
}
