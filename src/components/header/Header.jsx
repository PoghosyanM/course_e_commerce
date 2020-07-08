import React from 'react'
import shopLogo from './../../assets/images/shop-icon.png'
import { NavLink } from 'react-router-dom'
import { ShoppingCartOutlined } from '@ant-design/icons'
import './header.scss'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div>
          <img width="50" src={shopLogo} alt="Shop" />
        </div>
        <div className="links">
          <NavLink exact className="link" activeClassName="active" to="/">
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
          <div>
            <ShoppingCartOutlined />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
