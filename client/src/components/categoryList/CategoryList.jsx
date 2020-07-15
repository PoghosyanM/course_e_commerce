import React, { Component, Fragment } from 'react'
import './categoryList.scss'
import CategoryListItem from '../categoryListItem/CategoryListItem'

export class CategoryItem extends Component {
  render() {
    const { match, shopData } = this.props
    const category = shopData[match.params.category]
    if (!category) {
      return null
    }
    return (
      <div className="category-list-content">
        <h1>{category.title}</h1>
        <div key={category.id} className="category-list-items">
          {category.items.map(({ id, ...item }) => {
            return (
              <Fragment key={id}>
                <CategoryListItem {...item} />
              </Fragment>
            )
          })}
        </div>
        )
      </div>
    )
  }
}

export default CategoryItem
