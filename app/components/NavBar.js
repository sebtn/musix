import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class NavBar extends Component {
  render() {
    return (
    <div className="nav-container">
      <nav className="nav">
      <h1>Spotify React and redux app</h1>
      </nav>
    </div>
    )
  }
}

export default connect()(NavBar)