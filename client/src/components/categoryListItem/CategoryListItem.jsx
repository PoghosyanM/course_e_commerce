import React from 'react'

const CategoryListItem = ({ name, imageUrl, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <h4>{price} $</h4>
    </div>
  )
}

export default CategoryListItem
