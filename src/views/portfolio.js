import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './portfolio.css'

const Portfolio = (props) => {
  return (
    <div className="portfolio-container1">
      <Helmet>
        <title>Portfolio - Portfolio Page</title>
        <meta property="og:title" content="Portfolio - Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="portfolio-navbar-container">
        <div className="portfolio-navbar">
          <Link to="/" className="portfolio-navlink">
            <img
              alt="image"
              src="/logo-200h.png"
              className="portfolio-image1"
            />
          </Link>
          <div className="portfolio-links-container1">
            <Link to="/portfolio" className="portfolio-link1 Navbar-Link">
              Portofolio
            </Link>
            <Link to="/contact" className="portfolio-link2 Navbar-Link">
              Contact
            </Link>
          </div>
          <div data-role="BurgerMenu" className="portfolio-burger-menu">
            <svg viewBox="0 0 1024 1024" className="portfolio-icon1">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="portfolio-mobile-menu">
            <div className="portfolio-container2">
              <span className="Card-Heading portfolio-heading">Logo</span>
              <div data-role="CloseMobileMenu" className="portfolio-close-menu">
                <svg viewBox="0 0 1024 1024" className="portfolio-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="portfolio-links-container2">
              <span className="portfolio-link3 Navbar-Link">About</span>
              <span className="portfolio-link4 Navbar-Link">Experience</span>
              <span className="portfolio-link5 Navbar-Link">Portofolio</span>
              <span className="Navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-container3 thq-section-padding">
        <div className="portfolio-container4">
          <div className="portfolio-container5">
            <div className="portfolio-container6">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="portfolio-image2"
              />
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="portfolio-image3"
              />
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="portfolio-image4"
              />
            </div>
            <div className="portfolio-container7">
              <div className="portfolio-container8">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="portfolio-image5"
                />
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="portfolio-image6"
                />
              </div>
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="portfolio-image7"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
