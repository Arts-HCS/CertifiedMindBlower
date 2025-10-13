import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Contexto";
import './CartButton.css'

const CartButton = () => {

  const { cantidadTotal } = useContext(Context);

  return (
    <Link to='/cart' className='cart-button'>
      <i className="fa-solid fa-cart-shopping"></i>
      <p className='quantity'>{cantidadTotal}</p>
    </Link>
  )
}

export default CartButton