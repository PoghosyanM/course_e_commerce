import React from 'react'
import Header from './components/header/Header'
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import ContactUs from './pages/contactUs/ContactUs'
import Error404 from './components/error/Error404'
import CategoryItem from './components/categoryItem/CategoryItem'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/shop" component={Shop} exact />
          <Route path="/shop/:category" component={CategoryItem} exact />
          <Route path="/contactUs" component={ContactUs} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}

export default App
