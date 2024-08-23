import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <Link to="/" className="home-navlink">
            <img alt="image" src="/logo-200h.png" className="home-image" />
          </Link>
          <div className="home-links-container1">
            <Link to="/portfolio" className="home-link1 Navbar-Link">
              Portofolio
            </Link>
            <Link to="/contact" className="home-link2 Navbar-Link">
              Contact
            </Link>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon1">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container2">
              <span className="Card-Heading home-heading">Logo</span>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container2">
              <span className="home-link3 Navbar-Link">About</span>
              <span className="home-link4 Navbar-Link">Experience</span>
              <span className="home-link5 Navbar-Link">Portofolio</span>
              <span className="Navbar-Link">Contact</span>
            </div>
          </div>
        </div>
        <div className="home-container3 thq-section-padding">
          <div className="home-max-width thq-section-max-width">
            <animate-on-reveal
              animation="pulse"
              duration="300ms"
              delay="0s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <button
                type="button"
                data-thq-animate-on-reveal="true"
                className="home-button thq-button-filled"
              >
                <span>
                  <span>CHECK PORTFOLIO</span>
                  <br></br>
                </span>
              </button>
            </animate-on-reveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
