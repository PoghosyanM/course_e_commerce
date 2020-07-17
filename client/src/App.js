import React from 'react'
import Header from './components/header/Header'
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import ContactUs from './pages/contactUs/ContactUs'
import Error404 from './components/error/Error404'
import Footer from './components/footer/footer'
import CategoryItem from './components/categoryList/CategoryList'
import axios from 'axios'

class App extends React.Component {
  state = {
    shopData: {},
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

  render() {
    const { shopData } = this.state

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
              <CategoryItem shopData={shopData} {...props} />
            )}
            exact
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
