import React from 'react'
import './categoryListItem.scss'
import { connect } from 'react-redux'
import { addCartItemActionCreator } from '../../redux/shopReducer'

const CategoryListItem = ({ item, addCartItem }) => {
  const { name, imageUrl, price } = item
  return (
    <div className="category-list-item-content">
      <h2>{name}</h2>
      <div className="item-image-content">
        <img src={imageUrl} alt={name} />
        <button
          onClick={() => {
            addCartItem(item)
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

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (itemToAdd) => dispatch(addCartItemActionCreator(itemToAdd)),
})

export default connect(null, mapDispatchToProps)(CategoryListItem)
