import React, { Fragment } from 'react'
import CartItem from '../cartItem/CartItem'
import './cartPopup.scss'
import { connect } from 'react-redux'

const CartPopup = ({ cart }) => {
  if (!cart.length) {
    return (
      <div className="cart-popup-content">
        <div className="empty">
          <h2>Cart Is Empty</h2>
        </div>
      </div>
    )
  }
  return (
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
          <Fragment key={item.id}>
            <CartItem item={item} imageWidth={70} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  }
}

export default connect(mapStateToProps)(CartPopup)
