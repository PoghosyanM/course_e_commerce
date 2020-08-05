import React from 'react'
import Header from './components/header/Header'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import ContactUs from './pages/contactUs/ContactUs'
import Error404 from './components/error/Error404'
import Footer from './components/footer/footer'
import CategoryList from './components/categoryList/CategoryList'
import Cart from './pages/cart/Cart'
import Admin from './pages/admin/Admin'
import { connect } from 'react-redux'
import { getShopData } from './redux/shopReducer'

class App extends React.Component {
  componentDidMount() {
    this.props.getShopData()
    // const localStorageCart = JSON.parse(localStorage.getItem('cart'))

    // if (localStorageCart?.length) {

    // }
  }

  componentDidUpdate() {
    // localStorage.setItem('cart', JSON.stringify(this.state.cart))
  }

  render() {
    const { location } = this.props
    if (location.pathname === '/') {
      return <Redirect to="/shop" />
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/shop" component={Shop} exact />
          <Route path="/shop/:category" component={CategoryList} />
          <Route path="/cart" component={Cart} />
          <Route path="/admin" component={Admin} />
          <Route path="/contactUs" component={ContactUs} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getShopData: () => dispatch(getShopData()),
  }
}

export default connect(null, mapDispatchToProps)(withRouter(App))
