import React from 'react'
import styles from '../styling/all.module.css'

export default function About() {
  return (
    <div  className={styles.about}>
        <h2 className={styles.aboutheading}>About</h2>
        <p>
        I'm a paragraph. Click here to add 
        your own text and edit me. It’s easy. 
        Just click “Edit Text” or double click 
        me to add your own content and make 
        changes to the font. I’m a great place 
        for you to tell a story and let your users
         know a little more about you.
        </p>
    </div>
  )
}
