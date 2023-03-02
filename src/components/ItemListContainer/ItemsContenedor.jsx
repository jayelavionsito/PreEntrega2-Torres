import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import IMG from '../../media/SONY A7SIII.jpg'

const ItemsContenedor = () => {
  return (
    <>
    <h1 className="title">Todos nuestros productos</h1>
    <div className="productos">
        <div className="producto">
    <a href="#">
        <div className="producto_img">
            <img src={IMG} alt=""/>
        </div>
        </a>
        <div className="producto_footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <p className="price"></p>
        </div>
        <div className="buttom">
            <button className="btn">Añadir al carrito</button>
            <a href="#">Vista</a>
        </div>
        </div>


        <div className="producto">
    <a href="#">
        <div className="producto_img">
            <img src={IMG} alt=""/>
        </div>
        </a>
        <div className="producto_footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <p className="price"></p>
        </div>
        <div className="buttom">
            <button className="btn">Añadir al carrito</button>
            <a href="#">Vista</a>
        </div>
        </div>


        <div className="producto">
    <a href="#">
        <div className="producto_img">
            <img src={IMG} alt=""/>
        </div>
        </a>
        <div className="producto_footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <p className="price"></p>
        </div>
        <div className="buttom">
            <button className="btn">Añadir al carrito</button>
            <a href="#">Vista</a>
        </div>
        </div>
    </div>
    </>
  )
           


}

export default ItemsContenedor