import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const NavBar = () => (
  <div className="nav-container">
    <nav className="nav">
      <h3>Spotify searcher in React-Redux style</h3>
    </nav>
  </div>
)

export default connect()(NavBar)