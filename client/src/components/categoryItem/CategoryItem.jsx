import React, { Component } from 'react'
import './categoryItem.scss'
import {Link} from "react-router-dom";

export class CategoryItem extends Component {
  render() {
      const {category} = this.props

      return (
          <>
          <Link to={`/shop/${category.routeName}`}>
              <h1>{category.title}</h1>
          </Link>
      <div key={category.id} className="shop-category-list-items">


      {category.items.map((item) => {

    return (
        <div key={item.id} >
                <h2>{item.name}</h2>

            <img src={item.imageUrl} alt={item.name} />
        </div>
    )
      }).splice(0,4)}
  </div>
              </>
      )
  }
}

export default CategoryItem
