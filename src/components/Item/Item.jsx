import React from 'react'
import AddToCart from '../AddToCart/AddToCart'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className='product-box'>
      <figure className='product-figure'>
        <img className='product-img' src={producto.img} alt={producto.nombre} />
        <Link to={`/idItem/${producto.id}`}>
          <AddToCart></AddToCart>
        </Link>
      </figure>
      <div className="product-data">
        <h3 className='product-name'>{producto.nombre}</h3>
        <h5 className='product-price'>{producto.precio},00 USD</h5>
      </div>
    </div>
  )
}

export default Item