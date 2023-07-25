import React from 'react'
import Navbar from "../navbar/navbar"
import logoX from "../../images/logo_x_white.png"
import './order.scss'

const Order = () => {
  return (
    <div className="order">
      
      <div className="container">
      <Navbar />
      <div className="order-container">

          <div className="order-showcase">
            <img className="order-logo" src={ logoX } alt="X logo" />
            <h1 className="order-title">Order Starlink</h1>
            <p className="order-subtitle">
              Starlink provides high-speed, low-latency broadband internet across the globe. 
              Within each coverage area, orders are fulfilled on a first-come, first-served basis.
            </p>
          </div>

          <form className="order-request">
            <input type="text" placeholder='service address'/>
            <button>Order now</button>
          </form>
      </div>

        <p className="view-map">
          <a href="https://www.starlink.com/map">View Aviability map</a>
          <i class="fa-sharp fa-regular fa-location-dot"></i>
        </p>

        <p className="terms-conditions">
          By clicking order now, you agree to our 
          <a href="https://www.starlink.com/legal"> Privacy Policy</a>

          <div className="scrollme">
            <svg width="30px" height="20px">
              <path stroke="#ffffff" stroke-width="2px" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "></path>
            </svg>
          </div>
        </p>

      </div>
    </div>
  )
}

export default Order