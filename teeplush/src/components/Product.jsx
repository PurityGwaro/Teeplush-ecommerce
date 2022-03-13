import React from 'react'

export default function Product(props) {
  return (
    <div>
        <img src={props.src} height='250' width='50'/>
        <img src={props.src} height='250' width='50'/>
        <img src={props.src} height='250' width='50'/>
        
        <p>{props.productName}</p>
        <hr/>
        <p>{props.productPrice}</p>
    </div>
  )
}
