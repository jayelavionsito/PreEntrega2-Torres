import React from 'react'
import IMG from "../../images/SONY A7SIII.jpg";

export const ItemsDetalleContenedor = ({ 
    id,
    title,
    price,
    image,
    category,
    cantidad,
}) => {


  return (
    <div className="producto">
    <a href="#">
        <div className="producto_img">
            <img src={image} alt=""/>
        </div>
        </a>
        <div className="producto_footer">
            <h1> {title} </h1>
            <p> {category} </p>
            <p className="price"> ${price} </p>
        </div>
        <div className="buttom">
            <button className="btn">Añadir al carrito</button>
            <a href="#">Vista</a>
        </div>
        </div>
  )
}

export default ItemsDetalleContenedor