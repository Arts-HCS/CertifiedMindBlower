import React, { useEffect, useState } from 'react'
import './ItemDetails.css'

const ItemDetails = ({productos}) => {

    const [cantidad, setCantidad] = useState(1)
    const [total, setTotal] = useState(1)

    const aumentar = () =>{
        setCantidad((prev) =>{
            return prev + 1
        })
    }

    const disminuir = () =>{
        if (cantidad > 1){
            setCantidad((prev) =>{
                return prev - 1
            })
        }
    }

    useEffect(()=>{
        setTotal(cantidad * productos.precio)

    }, [cantidad, productos.precio])

  return (
    <div className="section-content">
        <div className="left-space">
            <figure className='left-figure'>
                <img className='section-img' src={productos.img} alt={productos.nombre} />
            </figure>
            <figure className="right-figure">
                <img className='section-img' src={productos.img_back} alt={productos.nombre} />
            </figure>
        </div>
        <div className="right-space">
            <div className="product-data">
                <h3 className='product-name'>{productos.nombre}</h3>
                <p className='product-id'>PRODUCT ID: {productos.id}</p>
                <hr/>
                <p className='product-description'>{productos.desc}</p>
                <h4 className='product-price'>{productos.precio},00 USD</h4>
                <div className="cart-buttons">
                    <div className="quantity-buttons">
                        <button onClick={aumentar} className='add-btn'>+</button>
                        <input value={cantidad}  className='quantity-value'></input>
                        <button onClick={disminuir} className='remove-btn'>-</button>
                    </div>
                    <button className='cart-btn'><span className='btn-text'>Add to cart</span><i className="fa-solid fa-cart-shopping"></i></button>
                </div>
                <p className='total-price'>Total: {total},00 USD</p>
                <hr />
            </div>
        </div>
    </div>
  )
}

export default ItemDetails