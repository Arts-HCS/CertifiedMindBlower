import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer'
import './App.css'
import { CarritoProvider } from './context/Contexto'
import Cart from './components/Cart/Cart'
import { ToastContainer } from "react-toastify";
import Checkout from './components/Checkout/Checkout'

const App = () => {
  return (

    <BrowserRouter>
      <CarritoProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<ItemListContainer></ItemListContainer>} ></Route>
          <Route path='/categoria/:categoria' element={<ItemListContainer />}></Route>
          <Route path='/idItem/:idItem' element={<ItemDetailsContainer />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path='/checkout' element={<Checkout/>}></Route>
        </Routes>
      </CarritoProvider>
      <ToastContainer />
    </BrowserRouter> 
    
  )
}

export default App