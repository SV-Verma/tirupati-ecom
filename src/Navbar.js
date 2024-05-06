import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ShoppingCart from './ShoppingCart';
import WishList from './WishList';
import { RiHome2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
     <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <div className="navbar-slot1" ></div>
    <div className="navbar-slot2">TIRUPATI JEWELLER's</div>
    <div className='nav-cart-slot3' >
      <div>
      <Link to="/">
         <RiHome2Line />
         </Link>
      </div>
      <div>
        <WishList />
      </div>
    <div>
     <ShoppingCart />
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">
              <Link to="/"> Home</Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./LogIn"><Link to="/LogIn" >Login</Link></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/">bangles</a></li>
              <li><a class="dropdown-item" href="/">kada</a></li>
              {/* <li>
                <hr class="dropdown-divider" />
              </li> */}
              <li><a class="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
