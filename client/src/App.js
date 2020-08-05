import React, { useEffect } from 'react'
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

const App = ({ getShopData, location }) => {
  useEffect(() => {
    getShopData()
  }, [getShopData])

  if (location.pathname === '/') {
    return <Redirect to="/shop" />
  }
  return (
    <div>
      <Header />
      <main className="routes-content">
        <Switch>
          <Route path="/shop" component={Shop} exact />
          <Route path="/shop/:category" component={CategoryList} />
          <Route path="/cart" component={Cart} />
          <Route path="/admin" component={Admin} />
          <Route path="/contactUs" component={ContactUs} />
          <Route component={Error404} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getShopData: () => dispatch(getShopData()),
  }
}

export default connect(null, mapDispatchToProps)(withRouter(App))
