import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetails from '../ItemDetails/ItemDetails'
import './ItemDetailsContainer.css'
import { db } from '../../services/config'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailsContainer = () => {

    const [producto, setProducto] = useState(null)

    const {idItem} = useParams()

    useEffect(()=>{
      const nuevoDoc = doc(db, 'productos',idItem)

      getDoc(nuevoDoc)
        .then(resp =>{
          const data = resp.data()
          const nuevoProducto = {id: resp.id, ...data}
          setProducto(nuevoProducto)
        })
        .catch(error => console.log(error))
    }, [idItem])

  return (
    <section className="details_section">
        <ItemDetails productos={{...producto}} ></ItemDetails>
    </section>
  )
}

export default ItemDetailsContainer