import React from "react"
import { Link, Routes, Route } from 'react-router-dom'
import Photos from "../pages/Photos"
import Cart from "../pages/Cart"

function Header() {
  return (
    <div>
      <header>
        <Link to='/'><h2>Pic-Some</h2></Link>
        <Link to='/cart'><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link>
      </header>
      <Routes>
        <Route 
          exact path='/'
          element = {<Photos />}
          >
        </Route>
        <Route  
          path='/cart'
          element = {<Cart />}
          >
        </Route>
      </Routes>
    </div>
      
  )
}

export default Header
