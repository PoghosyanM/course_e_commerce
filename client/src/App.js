import React from 'react'
import Header from './components/header/Header'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import ContactUs from './pages/contactUs/ContactUs'
import Error404 from './components/error/Error404'
import Footer from './components/footer/footer'
import CategoryList from './components/categoryList/CategoryList'
import axios from 'axios'
import Cart from './pages/cart/Cart'
import Admin from './pages/admin/Admin'
import { Provider, connect } from 'react-redux'
import { store } from './redux/store'
import { getShopData } from './redux/shopReducer'

class App extends React.Component {
  state = {
    shopData: {},
  }

  componentDidMount() {
    this.props.getShopData()
    // axios('/shop')
    //   .then((response) => {
    //     this.setState({
    //       shopData: response.data,
    //     })
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })
    const localStorageCart = JSON.parse(localStorage.getItem('cart'))

    // if (localStorageCart?.length) {

    // }
  }

  componentDidUpdate() {
    // localStorage.setItem('cart', JSON.stringify(this.state.cart))
  }

  updateShopData = (newShopData) => {
    this.setState({
      shopData: newShopData,
    })
  }

  render() {
    const { shopData, popupToggler } = this.state
    const { location } = this.props

    if (location.pathname === '/') {
      return <Redirect to="/shop" />
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route
            path="/shop"
            component={() => <Shop shopData={shopData} />}
            exact
          />
          <Route
            path="/shop/:category"
            component={(props) => (
              <CategoryList shopData={shopData} {...props} />
            )}
          />
          <Route path="/cart" component={Cart} />
          <Route
            path="/admin"
            component={() => <Admin updateShopData={this.updateShopData} />}
          />
          <Route path="/contactUs" component={ContactUs} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  let x = getShopData()
  return {
    getShopData: () => x(dispatch),
  }
}

export default connect(null, mapDispatchToProps)(withRouter(App))
