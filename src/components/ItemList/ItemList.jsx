import React, { useEffect } from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({productos}) => {

  return (
    <div className="products_list">
      {productos.map(producto =>{
        return (
          <Item key={producto.id} producto={producto}></Item>
        )
      })}
    </div>
  )
}

export default ItemList