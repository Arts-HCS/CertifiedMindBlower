import React, { useEffect, useState, useContext } from 'react'
import './ItemDetails.css'
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Context } from "../../context/Contexto";

const ItemDetails = ({ productos }) => {

  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(1);
  const [added, setAdded] = useState(false);

  const { agregarAlCarrito } = useContext(Context);

  const aumentar = () => {
    setCantidad(prev => prev + 1);
  };

  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad(prev => prev - 1);
    }
  };

  const manejarAgregar = () => {
    const item = { 
      id: productos.id, 
      nombre: productos.nombre, 
      precio: productos.precio, 
      prenda: productos.prenda,
      img: productos.img,
      img_back: productos.img_back
    };

    agregarAlCarrito(item, cantidad);
    toast.success(`Se agregaron ${cantidad} productos al carrito`, {
      autoClose: 2000,
      theme: "dark",
      position: "top-right",
    });

    setAdded(true); 
  };

  useEffect(() => {
    setTotal(cantidad * productos.precio);
  }, [cantidad, productos.precio]);

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
          <hr />
          <p className='product-description'>{productos.desc}</p>

          {!added ? (
            <div className="product-numbers">
            <h4 className='product-stock'>STOCK: {productos.stock}</h4>
            <h4 className='product-price'>{productos.precio},00 USD</h4>
          </div>
          ) : (
              <></>
          )}

          

          <div className="cart-buttons">
            {!added ? (
              <>
                <div className="quantity-buttons">
                  <button onClick={aumentar} className='add-btn'>+</button>
                  <input value={cantidad} readOnly className='quantity-value' />
                  <button onClick={disminuir} className='remove-btn'>-</button>
                </div>
                <button onClick={manejarAgregar} className='cart-btn'>
                  <span className='btn-text'>Add to cart</span>
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </>
            ) : (
              <Link to="/cart" className="go-to-cart-btn">
                Ir al carrito <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            )}
          </div>

          <p className='total-price'>Total: {total},00 USD</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
