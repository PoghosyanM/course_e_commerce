import React from 'react'
import Header from './components/header/Header'
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import ContactUs from './pages/contactUs/ContactUs'
import Error404 from './components/error/Error404'
import Footer from './components/footer/footer'
import CategoryList from './components/categoryList/CategoryList'
import axios from 'axios'

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
  }

  addItemToCart = (chosenItem) => {
    const isExistChosenItemInCart = this.state.cart.some(
      (item) => item.id === chosenItem.id
    )
    if (isExistChosenItemInCart) {
      return
    }

    this.setState({
      cart: [...this.state.cart, { ...chosenItem, quantity: 1 }],
    })
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

  render() {
    const { shopData, cart } = this.state
    return (
      <div>
        <Header
          cart={cart}
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
              <CategoryList
                addItemToCart={this.addItemToCart}
                shopData={shopData}
                {...props}
              />
            )}
          />
          <Route path="/contactUs" component={ContactUs} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
