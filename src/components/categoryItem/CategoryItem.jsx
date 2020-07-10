import React, { Component } from 'react'
import SHOP_DATA from '../../shopData/shopData'

export class CategoryItem extends Component {
  render() {
    console.log(this.props.match.params.category)
    const { match } = this.props
    const category = SHOP_DATA[match.params.category]
    return (
      <div>
        <div key={category.id}>
          <h1>{category.title}</h1>
          {category.items.map((item) => {
            return (
              <div key={item.id}>
                <h2>{item.name}</h2>
                <img src={item.imageUrl} alt="" />
                <h4>{item.price} $</h4>
              </div>
            )
          })}
        </div>
        )
      </div>
    )
  }
}

export default CategoryItem
