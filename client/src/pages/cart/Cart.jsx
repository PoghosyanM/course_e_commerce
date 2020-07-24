import React, { Fragment } from 'react'
import CartItem from './../../components/cartItem/CartItem'
import './Cart.scss'

const Cart = ({
  cart,
  decrementCartItemQuantity,
  incrementCartItemQuantity,
}) => {
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
            <CartItem
              decrementCartItemQuantity={decrementCartItemQuantity}
              incrementCartItemQuantity={incrementCartItemQuantity}
              item={item}
              imageWidth={300}
            />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Cart
