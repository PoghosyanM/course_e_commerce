import React from 'react'

export const withCalculate = (Component) => {
  function calc(a, b) {
    return a + b
  }
  return (props) => {
    return <Component {...props} calc={calc} />
  }
}

export const withConnect = (stateToProps, dispatchToProps) => {
  return (Component) => {
    return (props) => {
      const stateObj = stateToProps()
      const dispatchObj = dispatchToProps()
      return <Component {...props} {...stateObj} {...dispatchObj} />
    }
  }
}

const mapState = () => ({
  usersCount: 10,
  name: 'John',
  age: 25,
})

const mapDispatch = () => ({
  sum: (a, b) => a + b,
  multiply: (a, b) => a * b,
})

const ConnectedShop = withConnect(mapState, mapDispatch)(Shop)
