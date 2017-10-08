import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const NavBar = () => (
  <div className="nav-container">
    <nav className="nav">
      <h1>Spotify API artists browser</h1>
    </nav>
  </div>
)

export default connect()(NavBar)