
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import CartIcono from '../CartWidget/CartIcono';
import { Link } from 'react-router-dom';

const NaveBar = () => {
  return (
    <>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to={"/"} class="navbar-brand" href="#">Pulp Rental</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={"/category/:id"} class="nav-link active" aria-current="page" href="#">Cámaras</Link>
        </li>
        <li class="nav-item">
          <Link to={"/category/:id"} class="nav-link active" aria-current="page" href="#">Lentes</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link"><CartIcono /> <span className="item_total">0</span> </a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default NaveBar
