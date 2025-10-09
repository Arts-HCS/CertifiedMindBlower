import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer'
import './App.css'

const App = () => {
  return (

    <BrowserRouter>
    
        {/* <Navbar></Navbar> */}

        <Routes>
          <Route path='/' element={<ItemListContainer></ItemListContainer>} ></Route>
          <Route path='/categoria/:categoria' element={<ItemListContainer />}></Route>
          <Route path='/idItem/:idItem' element={<ItemDetailsContainer />}></Route>

        </Routes>
    
    </BrowserRouter> 
    
  )
}

export default App