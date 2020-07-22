import React from 'react'
import shopLogo from './../../assets/images/shop-icon.png'
import { NavLink, Link } from 'react-router-dom'
import {
  ShoppingCartOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons'
import './header.scss'

const Header = ({
  cart,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
}) => {
  console.log(cart)
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
        <div className="shopping-cart-content">
          <span className="chosen-items-count">{cart.length}</span>
          <ShoppingCartOutlined />
          <div className="cart-popup-content">
            <div className="total-count-content">
              <h3>
                Total Price:{' '}
                {cart.reduce((prev, current) => {
                  return prev + current.quantity * current.price
                }, 0)}{' '}
                $
              </h3>
            </div>
            <div className="cart-popup">
              {cart.map((item) => (
                <div key={item.id} className="item-details-content">
                  <LeftOutlined
                    onClick={() => decrementCartItemQuantity(item)}
                  />
                  <div className="item-details">
                    <span>{item.name}</span>
                    <img width="70" src={item.imageUrl} alt={item.name} />
                    <span>
                      {item.quantity} x {item.price}
                    </span>
                    <span>{item.quantity * item.price} $</span>
                  </div>
                  <RightOutlined
                    onClick={() => incrementCartItemQuantity(item)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
