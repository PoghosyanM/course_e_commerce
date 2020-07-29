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
import { Provider } from 'react-redux'
import { store } from './redux/store'

class App extends React.Component {
  state = {
    shopData: {},
    cart: [],
  }

  componentDidMount() {
    axios('/shop')
      .then((response) => {
        this.setState({
          shopData: response.data,
        })
      })
      .catch((error) => {
        console.error(error)
      })
    const localStorageCart = JSON.parse(localStorage.getItem('cart'))

    if (localStorageCart?.length) {
      this.setState({
        cart: localStorageCart,
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('cart', JSON.stringify(this.state.cart))
  }

  incrementCartItemQuantity = (chosenItem) => {
    this.setState({
      cart: this.state.cart.map((item) => {
        if (item.id === chosenItem.id) {
          return {
            ...chosenItem,
            quantity: chosenItem.quantity + 1,
          }
        }
        return item
      }),
    })
  }

  decrementCartItemQuantity = (chosenItem) => {
    if (chosenItem.quantity <= 1) {
      this.setState({
        cart: this.state.cart.filter((item) => item.id !== chosenItem.id),
      })
      return
    }
    this.setState({
      cart: this.state.cart.map((item) => {
        if (item.id === chosenItem.id) {
          return {
            ...chosenItem,
            quantity: chosenItem.quantity - 1,
          }
        }
        return item
      }),
    })
  }

  updateShopData = (newShopData) => {
    this.setState({
      shopData: newShopData,
    })
  }

  render() {
    const { shopData, cart, popupToggler } = this.state
    const { location } = this.props

    if (location.pathname === '/') {
      return <Redirect to="/shop" />
    }
    return (
      <Provider store={store}>
        <div>
          <Header
            incrementCartItemQuantity={this.incrementCartItemQuantity}
            decrementCartItemQuantity={this.decrementCartItemQuantity}
          />
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
            <Route
              path="/cart"
              component={() => (
                <Cart
                  cart={cart}
                  incrementCartItemQuantity={this.incrementCartItemQuantity}
                  decrementCartItemQuantity={this.decrementCartItemQuantity}
                />
              )}
            />
            <Route
              path="/admin"
              component={() => <Admin updateShopData={this.updateShopData} />}
            />
            <Route path="/contactUs" component={ContactUs} />
            <Route component={Error404} />
          </Switch>
          <Footer />
        </div>
      </Provider>
    )
  }
}

export default withRouter(App)
