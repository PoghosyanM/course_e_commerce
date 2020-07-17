import React, {Fragment} from 'react'
import './shop.scss'
import CategoryItem from "../../components/categoryItem/CategoryItem";

class Shop extends React.Component {
  render() {
    const { shopData } = this.props
      console.log(shopData)
    return (
      <div className="shop-content">
        <h1>Categories</h1>
        <div className="categories-content">

          {Object.keys(shopData).map((category) => {
            category = shopData[category]

            return (
                <div key={category.id}>
              <CategoryItem  category={category}  /><br/>
                    </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Shop
