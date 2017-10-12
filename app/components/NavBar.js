import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const NavBar = () => (
  <div className="nav-container">
    <nav className="nav">
      <p> Spot: your favorite tunes  </p>
    </nav>
  </div>
)

export default connect()(NavBar)