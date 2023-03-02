import React from 'react'
import NaveBar from './Navbar/NaveBar'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import ItemsContenedor from './ItemListContainer/ItemsContenedor'
import ItemsDetalleContenedor from './ItemsDetalleContenedor/ItemsDetalleContenedor'

const Inicio = () => {
  return (

    
    <BrowserRouter>

      <NaveBar />

    
  
    <Routes>
      <Route path= "/" element={<Inicio />} />
      <Route path= "/category/:id" element={<ItemsContenedor />} />
      <Route path="/item/:id" element={<ItemsDetalleContenedor />} />

    </Routes>



</BrowserRouter>


  )
}

export default Inicio