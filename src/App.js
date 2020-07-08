import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import ContactUs from './pages/contactUs/ContactUs'
import Error404 from './components/error/Error404'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Shop} exact />
          <Route path="/contactUs" component={ContactUs} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
