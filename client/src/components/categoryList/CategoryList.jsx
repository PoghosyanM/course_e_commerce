import React, { Component, Fragment } from 'react'
import './categoryList.scss'
import CategoryListItem from '../categoryListItem/CategoryListItem'

export class CategoryList extends Component {
  render() {
    const { match, shopData } = this.props
    const category = shopData[match.params.category]
    if (!category) {
      return null
    }
    return (
      <div className="category-list-content">
        <h1>{category.title}</h1>
        <div className="category-list-items">
          {category.items.map((item) => {
            return (
              <Fragment key={item.id}>
                <CategoryListItem item={item} />
              </Fragment>
            )
          })}
        </div>
        )
      </div>
    )
  }
}

export default CategoryList
