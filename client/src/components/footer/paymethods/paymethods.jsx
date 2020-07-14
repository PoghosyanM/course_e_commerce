import React from 'react'
// import paylogo from './../../assets/images/paylogo.png'
import './paymethods.scss'

class Paymethods extends React.Component {
  render() {
    return (
      <div className="paymethods">
        {/* <div><img width="300" src= {paylogo} alt="Pay" /></div> */}
        <div>
          <span className="privacy">Privacy Policy | Term And Condition</span>
          <br />
          <span className="copyright">Copyright © 2020 - CoreItLab</span>
        </div>
      </div>
    )
  }
}

export default Paymethods
