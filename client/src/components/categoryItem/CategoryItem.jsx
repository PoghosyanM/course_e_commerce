import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './CategoryItem.scss'

const CategoryItem = ({ chosenItems, routeName, title }) => {
  return (
    <div className="category-item-content">
      <Link to={`/shop/${routeName}`}>
        <h2>{title}</h2>
      </Link>
      <div className="category-items-images-content">
        {chosenItems.map((item) => (
          <Fragment key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default CategoryItem
