import React from 'react'
import styles from '../styling/header.module.css'
import { FaSistrix,  FaUserAlt, FaCartPlus } from "react-icons/fa";


export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.logobody}>
            <h2 className={styles.logo}>
                Tee-Plush
            </h2>
            <h3 className={styles.logodes}>
                Skin Care is Health Care
            </h3>
        </div>
            <ul>
                <a href='/'><li>Shop</li></a>
                <a href='/'><li>About</li></a>
                <a href='/'><li>FAQ</li></a>
                <a href='/'><li>Contact</li></a>
            </ul>
        <div className={styles.addons}>
            <div className={styles.search}>
                <div className={styles.searchwords}>
                <FaSistrix className={styles.searchicon}/>
                <input placeholder='Search...' className={styles.searchinput}/>
                </div>
                <hr className={styles.searchline}/>
            </div>
            <div className={styles.login}>
                <FaUserAlt className={styles.usericon}/>
                <p className={styles.loginwords}>Log In</p>
            </div>
            <a href='/' className={styles.shop}>
            <FaCartPlus className={styles.basket}/>
            </a>
        </div>
    </div>
  )
}
