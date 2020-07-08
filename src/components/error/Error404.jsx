import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Error404 extends Component {
  render() {
    return (
      <div>
        <h1>Error 404: Not found</h1>
        <h3>
          <Link to="/">Go To Home</Link>
        </h3>
      </div>
    )
  }
}

export default Error404
