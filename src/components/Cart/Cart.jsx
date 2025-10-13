import './Cart.css'
import CartItem from '../CartItem/CartItem'
import { Context } from '../../context/Contexto'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

const Cart = () => {

    const { carrito, total, cantidadTotal, vaciarCarrito } = useContext(Context);

  return (
    <section className='cart-section'>
        <Link to='/' className='return-btn'>Volver a la tienda <i className="fa-solid fa-arrow-left"></i></Link>
        <div className="section-title">
            <h2 className='title'>Carrito de compras</h2>
        </div>
        <div className="cart-container">
            {cantidadTotal === 0 ? (
                <div className='negative-return'>
                    <h3 className='empty-cart'>¡Tu carrito está vacío!</h3>
                    <Link className='return-btn' to="/">Volver a la tienda <i className="fa-solid fa-arrow-right"></i></Link>
                </div>

            ) : (
                <>
                <div className="items">
                    {carrito.map((producto)=>{
                        console.log(producto)
                        return(
                             <CartItem key={producto.item.id} item={producto.item} cantidad={producto.cantidad} />
                        )
                    })}
                </div>
                <div className="shop-data">
                    <h4 className='total cantidad'>Productos: {cantidadTotal}</h4>
                    <h4 className='total'>Total: ${total},00 USD</h4>
                    <button className='clear-cart' onClick={vaciarCarrito}>Vaciar carrito</button>
                </div>
                <Link className='checkout-button' to="/checkout">Finalizar compra</Link>
                </>
            )}
        </div>
    </section>
  )
}

export default Cart