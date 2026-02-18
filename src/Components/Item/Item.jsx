import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <>
      <div className="item">
        <Link to={`/product/${props.id}`}><img src={props.image} alt={props.alt} /></Link>
        <p>{props.name}</p>
        <div className="item_prices">
          <div className="item_price_new">${props.price_new}</div>
          <div className="item_price_old">${props.price_old}</div>
        </div>
      </div>
    </>
  )
}

export default Item