import React, { useContext } from "react"
import { Link, Routes, Route } from 'react-router-dom'
import Photos from "../pages/Photos"
import Cart from "../pages/Cart"
import { Context } from "../ContextProvider"

function Header() {
  const {cartItems} = useContext(Context)
  const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
  return (
    <div>
      <header>
        <Link to='/'><h2>Pic-Some</h2></Link>
        <Link to="/cart">
          <i className={`${cartClassName} ri-fw ri-2x`}></i>
        </Link>
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
