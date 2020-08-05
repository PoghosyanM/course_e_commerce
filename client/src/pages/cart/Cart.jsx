import React, { Fragment } from 'react'
import CartItem from './../../components/cartItem/CartItem'
import './Cart.scss'
import { connect } from 'react-redux'

const Cart = ({ cart }) => {
  if (!cart.length) {
    return (
      <div className="cart-content">
        <div className="empty">
          <h2>Cart Is Empty</h2>
        </div>
      </div>
    )
  }
  return (
    <div className="cart-content">
      <div className="total-count-content">
        <h3>
          Total Price:{' '}
          {cart.reduce((prev, current) => {
            return prev + current.quantity * current.price
          }, 0)}{' '}
          $
        </h3>
      </div>
      <div className="cart-items-content">
        {cart.map((item) => (
          <Fragment key={item.id}>
            <CartItem item={item} imageWidth={300} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.shop.cart,
})

export default connect(mapStateToProps)(Cart)
