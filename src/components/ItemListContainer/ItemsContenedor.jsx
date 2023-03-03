import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { DataContext } from "../../components/context/Dataprovider"
import ItemsDetalleContenedor from '../ItemsDetalleContenedor/ItemsDetalleContenedor';

export const ItemsContenedor = () => {

const value = useContext(DataContext)
const [productos] = value.productos

  return (
    <>
    <div>
    <h1 className="title">Todos nuestros productos disponibles para alquilar</h1>
    <div className="productos">
        {
            productos.map(producto =>(
            < ItemsDetalleContenedor 
            key={producto.id} 
            id={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            category={producto.category} 
            cantidad={producto.cantidad} />
            ))
        }
    </div>
    
    </div>
    </>

  )
           


}

export default ItemsContenedor