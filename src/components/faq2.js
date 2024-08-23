import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './faq2.css'

const FAQ2 = (props) => {
  return (
    <div className={`faq2faq8 thq-section-padding ${props.rootClassName} `}>
      <div className="faq2-max-width thq-section-max-width">
        <div className="thq-flex-row faq2-container">
          <div className="thq-flex-column">
            <div className="faq2-content">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="faq2-text11 thq-heading-2">FAQs</h2>
                  </Fragment>
                )}
              </h2>
            </div>
          </div>
          <div className="thq-flex-column">
            <div className="faq2-list-item1">
              <p>
                {props.faq1Question ?? (
                  <Fragment>
                    <p className="faq2-text16 thq-body-large">
                      Frequently Asked Questions
                    </p>
                  </Fragment>
                )}
              </p>
              <span>
                {props.faq1Answer ?? (
                  <Fragment>
                    <span className="faq2-text20 thq-body-small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq2-list-item2">
              <p>
                {props.faq2Question ?? (
                  <Fragment>
                    <p className="faq2-text13 thq-body-large">
                      Frequently Asked Questions
                    </p>
                  </Fragment>
                )}
              </p>
              <span>
                {props.faq2Answer ?? (
                  <Fragment>
                    <span className="faq2-text17 thq-body-small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq2-list-item3">
              <p>
                {props.faq3Question ?? (
                  <Fragment>
                    <p className="faq2-text15 thq-body-large">
                      Frequently Asked Questions
                    </p>
                  </Fragment>
                )}
              </p>
              <span>
                {props.faq3Answer ?? (
                  <Fragment>
                    <span className="faq2-text14 thq-body-small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq2-list-item4">
              <p>
                {props.faq4Question ?? (
                  <Fragment>
                    <p className="faq2-text12 thq-body-large">
                      Frequently Asked Questions
                    </p>
                  </Fragment>
                )}
              </p>
              <span>
                {props.faq4Answer ?? (
                  <Fragment>
                    <span className="faq2-text21 thq-body-small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq2-list-item5">
              <p>
                {props.faq5Question ?? (
                  <Fragment>
                    <p className="faq2-text19 thq-body-large">
                      Frequently Asked Questions
                    </p>
                  </Fragment>
                )}
              </p>
              <span>
                {props.faq5Answer ?? (
                  <Fragment>
                    <span className="faq2-text18 thq-body-small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ2.defaultProps = {
  heading1: undefined,
  faq4Question: undefined,
  faq2Question: undefined,
  faq3Answer: undefined,
  faq3Question: undefined,
  rootClassName: '',
  faq1Question: undefined,
  faq2Answer: undefined,
  faq5Answer: undefined,
  faq5Question: undefined,
  faq1Answer: undefined,
  faq4Answer: undefined,
}

FAQ2.propTypes = {
  heading1: PropTypes.element,
  faq4Question: PropTypes.element,
  faq2Question: PropTypes.element,
  faq3Answer: PropTypes.element,
  faq3Question: PropTypes.element,
  rootClassName: PropTypes.string,
  faq1Question: PropTypes.element,
  faq2Answer: PropTypes.element,
  faq5Answer: PropTypes.element,
  faq5Question: PropTypes.element,
  faq1Answer: PropTypes.element,
  faq4Answer: PropTypes.element,
}

export default FAQ2
