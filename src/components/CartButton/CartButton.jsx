import React from 'react'
import './CartButton.css'

const CartButton = () => {
  return (
    <div className='cart-button'>
      <i className="fa-solid fa-cart-shopping"></i>
      <p className='quantity'>0</p>
    </div>
  )
}

export default CartButton