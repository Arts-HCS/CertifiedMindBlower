import React from 'react'
import './CartItem.css'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { Context } from "../../context/Contexto";


const CartItem = ({item, cantidad}) => {

    const {eliminarProducto} = useContext(Context);
    console.log(item.img)

  return (
    <div className='product-line'>
        <figure className="product-img-container">
            <img className='prod-img' src={`${item.img}`} alt={item.nombre} />
        </figure>
        <div className="product-cart-data">
            <h3 className='product-name'>{item.nombre}</h3>
            <h5 className='product-price'>{item.precio},00 USD</h5>
            <h5 className='product-cantidad'>Cantidad: {cantidad}</h5>
        </div>
        <button className='delete-button' onClick={() => eliminarProducto(item.id)}>Eliminar <i class="fa-solid fa-trash"></i></button>
    </div>
  )
}

export default CartItem