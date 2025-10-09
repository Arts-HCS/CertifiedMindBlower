import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { db } from '../../services/config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useParams, Link } from 'react-router-dom'
import Hero from '../Hero/Hero'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const {categoria} = useParams()

  useEffect(() =>{
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(btn =>{
      btn.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('lit'))
        btn.classList.add('lit')
      })
    })

    const misProductos = categoria ? query(collection(db, 'productos'), where("prenda", "==", categoria)) : collection(db, 'productos')
    getDocs(misProductos)
      .then(resp =>{
        const nuevosProductos = resp.docs.map(doc =>{
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos)
      })
      .catch(error => console.log(error))

  }, [categoria])

  return (
    <>
      {categoria || <Hero></Hero>}
      <section className='main_container-section'>
          <div className="options">
              <Link to='/' className='option-button lit'>All</Link>
              <Link to='/categoria/playera' className='option-button'>Tees</Link>
              <Link to='/categoria/pants' className='option-button'>Pants</Link>
              <Link to='/categoria/shorts' className='option-button'>Shorts</Link>
              <Link to='/categoria/hoodie' className='option-button'>Hoodies</Link>
          </div>
          <ItemList productos={productos} ></ItemList>
      </section>
    </>
  )
}

export default ItemListContainer