import React, { Fragment } from 'react'
import './shop.scss'
import CategoryItem from '../../components/categoryItem/CategoryItem'
import { connect } from 'react-redux'

const Shop = ({ shopData }) => {
  return (
    <div className="shop-content">
      <h1>Categories</h1>
      <div className="categories-content">
        {Object.keys(shopData).map((category) => {
          category = shopData[category]
          const chosenItems = category.items.slice(0, 4)
          return (
            <Fragment key={category.id}>
              <CategoryItem
                chosenItems={chosenItems}
                routeName={category.routeName}
                title={category.title}
              />
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  shopData: state.shop.shopData,
})

export default connect(mapStateToProps)(Shop)
