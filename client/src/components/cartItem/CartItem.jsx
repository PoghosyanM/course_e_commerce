import React from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import {
  incrementCartItemQuantityAC,
  decrementCartItemQuantityAC,
} from '../../redux/shopReducer'

const CartItem = ({
  decrementCartItemQuantity,
  incrementCartItemQuantity,
  item,
  imageWidth,
}) => {
  const { name, quantity, price, imageUrl } = item
  return (
    <div className="item-details-content">
      <LeftOutlined onClick={() => decrementCartItemQuantity(item)} />
      <div className="item-details">
        <span>{name}</span>
        <img width={imageWidth} src={imageUrl} alt={name} />
        <span>
          {quantity} x {price}
        </span>
        <span>{quantity * price} $</span>
      </div>
      <RightOutlined onClick={() => incrementCartItemQuantity(item)} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  incrementCartItemQuantity: (itemToAddQuantity) =>
    dispatch(incrementCartItemQuantityAC(itemToAddQuantity)),
  decrementCartItemQuantity: (itemToDecreaseQuantity) =>
    dispatch(decrementCartItemQuantityAC(itemToDecreaseQuantity)),
})

export default connect(null, mapDispatchToProps)(CartItem)
