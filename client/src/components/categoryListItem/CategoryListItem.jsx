import React from 'react'
import './categoryListItem.scss'

const CategoryListItem = ({ item, addItemToCart }) => {
  const { name, imageUrl, price } = item
  return (
    <div className="category-list-item-content">
      <h2>{name}</h2>
      <div className="item-image-content">
        <img src={imageUrl} alt={name} />
        <button
          onClick={() => {
            addItemToCart(item)
          }}
          className="add-to-cart-button"
        >
          Add To Cart
        </button>
      </div>
      <h4>{price} $</h4>
    </div>
  )
}

export default CategoryListItem
