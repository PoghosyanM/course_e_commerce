import React from 'react'
import './shop.scss'
import { getRandomArbitrary } from '../../utils/helpers'
import { Link } from 'react-router-dom'

class Shop extends React.Component {
  render() {
    const { shopData } = this.props
    return (
      <div className="shop-content">
        <h1>Categories</h1>
        <div className="categories-content">
          {Object.keys(shopData).map((category) => {
            category = shopData[category]
            const chosenImage =
              category.items[getRandomArbitrary(0, category.items.length - 1)]
                .imageUrl
            return (
              <div key={category.id}>
                <Link to={`/shop/${category.routeName}`}>
                  <h2>{category.title}</h2>
                </Link>
                <img src={chosenImage} alt={category.title} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Shop
