import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container1">
      <Helmet>
        <title>Contact - Portfolio Page</title>
        <meta property="og:title" content="Contact - Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="contact-navbar-container">
        <div className="contact-navbar">
          <Link to="/" className="contact-navlink">
            <img alt="image" src="/logo-200h.png" className="contact-image1" />
          </Link>
          <div className="contact-links-container1">
            <Link to="/portfolio" className="contact-link1 Navbar-Link">
              Portofolio
            </Link>
            <Link to="/contact" className="contact-link2 Navbar-Link">
              Contact
            </Link>
          </div>
          <div data-role="BurgerMenu" className="contact-burger-menu">
            <svg viewBox="0 0 1024 1024" className="contact-icon1">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="contact-mobile-menu">
            <div className="contact-container2">
              <span className="Card-Heading contact-heading">Logo</span>
              <div data-role="CloseMobileMenu" className="contact-close-menu">
                <svg viewBox="0 0 1024 1024" className="contact-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="contact-links-container2">
              <span className="contact-link3 Navbar-Link">About</span>
              <span className="contact-link4 Navbar-Link">Experience</span>
              <span className="contact-link5 Navbar-Link">Portofolio</span>
              <span className="Navbar-Link">Contact</span>
            </div>
          </div>
        </div>
        <div className="contact-container3 thq-section-padding">
          <div className="contact-max-width thq-section-max-width"></div>
          <div className="contact-faq8 thq-section-padding">
            <img
              alt="image"
              src="/contact-200h.png"
              className="contact-image2"
            />
            <h2 className="contact-text1 thq-heading-2">
              <span>Email: info@sophie6000.com</span>
              <br></br>
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
