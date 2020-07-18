import React from 'react'
import shopLogo from './../../assets/images/shop-icon.png'
import { NavLink, Link } from 'react-router-dom'
import { ShoppingCartOutlined } from '@ant-design/icons'
import './header.scss'
import MiniCart from "../categoryItem/miniCart/MiniCart";


const Header = ({ cart }) => {

  return (
    <div className="header">
      <Link to="/shop">
        <img width="50" src={shopLogo} alt="Shop" />
      </Link>
      <div className="links">
        <NavLink className="link" activeClassName="active" to="/shop">
          Shop
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/contactUs">
          Contact Us
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/signIn">
          Sign In
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/signUp">
          Sign Up
        </NavLink>
<div className="miniCartHide">
        <div onClick={() =>{}}  className="shopping-cart-content">
          <span className="chosen-items-count">{cart.length}</span>
          <ShoppingCartOutlined />
        </div>
<MiniCart cart={cart}/>
</div>
      </div>
    </div>
  )
}

export default Header
