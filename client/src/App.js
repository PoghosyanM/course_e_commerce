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
    showMiniCart: false
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
    const isExsistChosenItemInCart = this.state.cart.some(
      (item) => item.id === chosenItem.id
    )
    if (isExsistChosenItemInCart) {
      return
    }

    this.setState({
      cart: [...this.state.cart, chosenItem],
    })
  }


  setShowMiniCart = ()=>{
    const {showMiniCart} = this.state
    if(showMiniCart === false){
  this.setState({
    showMiniCart: true
            
      })
    }else{
      this.setState({
        showMiniCart: false
    })
    }}


  render() {
    const { shopData, cart, showMiniCart } = this.state
    console.log(showMiniCart)
    return (
      <div>
        <Header cart={cart} showMiniCart={showMiniCart} setShowMiniCart={this.setShowMiniCart} />

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
