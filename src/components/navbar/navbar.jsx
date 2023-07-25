import React from 'react'
import "./navbar.scss"
import logo from "../../images/logo_white.png"
import toggleX from "../../images/Menu_X.svg"
import logoX from "../../images/logo_x_white.png"
import toggleHamburger from "../../images/Menu_Hamburger.svg"
import languageIcon from "../../images/Language_Globe.svg"
import { useState } from "react"

const Navbar = () => {

  const [ toggle, setToggle ] = useState(false); 
  

  return (
    <>
      {/* Navigation for Desktop */} 

      <div className="navbar-menu">
        <div className="navbar-logo">
          <img src={ logo } alt="starlink" />
        </div>
        
        <div className="nav">
          <div className="nav-main">
              <a href="#" className="nav__main-item">Residential</a>
              <a href="#" className="nav__main-item">Business</a>
              <a href="#" className="nav__main-item">Roam</a>
              <a href="#" className="nav__main-item">Mobility</a>
              <a href="#" className="nav__main-item">Maritime</a>
              <a href="#" className="nav__main-item">Aviation</a>
              <a href="#" className="nav__main-item">Iot</a>
            </div>
            <div className="nav-primary">
              <a href="#" className="nav__main-item">Technology</a>
              <a href="#" className="nav__main-item">Support</a>
            </div>
        </div>

        <div onClick={ () => { setToggle(!toggle) } } className="navbar-toggle-btn-opening">
            <img src={ toggleHamburger } alt="toggleHamburger" />
        </div>
      </div>

      {/* Navigation for Mobile and Tablets */}

      <nav className={ `navbar ${toggle ? "navbar-open" : "navbar-close"}` }>
        <div className="navbar-container">

          <div className="navbar-navigation">
            <div className="navbar-x-logo">
              <img src={ logoX } alt="starlink logo" />
            </div>
            
            <div onClick={ () => { setToggle(!toggle) } } className="navbar-toggle-btn">
              <img src={ toggleX } alt="toggleX" />
            </div>
            
          </div>

          <p className="navbar-services">
            Services
          </p>

          <div className="navbar-links">

            <div className="navbar-links__main">
              <a href="#" className="navbar-links__main-item">Residential</a>
              <a href="#" className="navbar-links__main-item">Business</a>
              <a href="#" className="navbar-links__main-item">Roam</a>
              <a href="#" className="navbar-links__main-item">Mobility</a>
              <a href="#" className="navbar-links__main-item">Maritime</a>
              <a href="#" className="navbar-links__main-item">Aviation</a>
              <a href="#" className="navbar-links__main-item">Iot</a>
            </div>

            <div className="navbar-links__primary">
              <a href="#" className="navbar-links__main-item">Technology</a>
              <a href="#" className="navbar-links__main-item">Support</a>
            </div>

            <div className="navbar-links__secondary">
              <a href="#" className="navbar-links__main-item">Map</a>
              <a href="#" className="navbar-links__main-item">Resources</a>
              <a href="#" className="navbar-links__main-item">Specifications</a>
              <a href="#" className="navbar-links__main-item--language">
                US
                <img src={ languageIcon } alt="language Icon" />
              </a>
              <a href="#" className="navbar-links__main-item">Sign in</a>
            </div>

          </div>  
        </div>
      </nav>
    </>
    
  )
}

export default Navbar