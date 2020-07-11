import React from 'react'
import Header from './components/header/Header'
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import ContactUs from './pages/contactUs/ContactUs'
import Error404 from './components/error/Error404'
<<<<<<< HEAD
import Footer from './footer/footer'
=======
import CategoryItem from './components/categoryItem/CategoryItem'
>>>>>>> dc816c531dd972922baeda82b6c79e52898651ae

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
          <div><Footer /></div>
      </div>

  )
  }
}

export default App
