import React from 'react'
import { Link } from 'react-router-dom'
import './error404.scss'

const Error404 = () => {
  return (
    <div className="error-content">
      <img
        src="https://www.lifewire.com/thmb/cs2-Z9DgJHIVIj2lP4ZNP8eVaJM=/1500x999/filters:fill(auto,1)/404-not-found-error-explained-2622936-b5abe50f71c1433e8112ba57b5de5346.png"
        alt="404: Not Found"
      />
      <h3>
        <Link to="/shop">Go To Home</Link>
      </h3>
    </div>
  )
}

export default Error404
