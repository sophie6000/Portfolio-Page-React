import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div
      className={`banner1-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner1-max-width thq-section-max-width">
        <div className="banner1-container2">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="banner1-text2 thq-heading-2">Company Name</h2>
              </Fragment>
            )}
          </h2>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner1-text3">Call to Action</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner1.defaultProps = {
  heading1: undefined,
  action1: undefined,
  rootClassName: '',
}

Banner1.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Banner1
