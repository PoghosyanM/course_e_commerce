import React from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const CartPopupItem = ({
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

export default CartPopupItem
