import { useState, useContext } from 'react';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../../context/Contexto';
import { db } from '../../services/config';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';

const Checkout = () => {
  const navigate = useNavigate();
  const { carrito, vaciarCarrito, total } = useContext(Context);

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !email || !telefono || !direccion) return;

    const logo = document.getElementById('logo');
    logo?.classList.add('finished');

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total,
      nombre,
      telefono,
      email,
      direccion,
    };

    try {
      await Promise.all(
        orden.items.map(async (productoOrden) => {
          const productoRef = doc(db, 'productos', productoOrden.id);
          const productoDoc = await getDoc(productoRef);
          const stockActual = productoDoc.data().stock;

          await updateDoc(productoRef, {
            stock: stockActual - productoOrden.cantidad,
          });
        })
      );

      await addDoc(collection(db, 'ordenes'), orden);

      vaciarCarrito();

      toast.success('Se ha finalizado exitosamente la compra', {
        autoClose: 3000,
        theme: 'dark',
        position: 'top-center',
      });

      setTimeout(() => {
        logo?.classList.remove('finished');
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Error al crear la orden', error);
      toast.error('Error al crear la orden. Intente nuevamente.', {
        theme: 'dark',
      });
    }
  };

  const allFilled = nombre && email && telefono && direccion;

  return (
    <section className="checkout-section">
      <div className="section-title">
        <h2 className="title">Finaliza tu compra</h2>
      </div>

      <form className="checkout-forms" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu email"
        />

        <label htmlFor="telephone">Teléfono</label>
        <input
          type="tel"
          id="telephone"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Ingresa tu teléfono"
        />

        <label htmlFor="direction">Dirección</label>
        <textarea
          id="direction"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          placeholder="Ingresa tu dirección"
        ></textarea>

        <button
          id="submit"
          type="submit"
          className={`submit-checkout ${allFilled ? 'allowed' : ''}`}
        >
          Finalizar
        </button>
      </form>
    </section>
  );
};

export default Checkout;
