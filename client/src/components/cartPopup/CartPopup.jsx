import React, { Fragment } from 'react'
import CartItem from '../cartItem/CartItem'
import './cartPopup.scss'

const CartPopup = ({
  decrementCartItemQuantity,
  incrementCartItemQuantity,
  cart,
}) => {
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
            <CartItem
              decrementCartItemQuantity={decrementCartItemQuantity}
              incrementCartItemQuantity={incrementCartItemQuantity}
              item={item}
              imageWidth={70}
            />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default CartPopup
