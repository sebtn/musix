import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class NavBar extends Component {
  render() {
    return (
    <div className="nav-container">
      <nav className="nav">
        <a className="nav-link active" href="#">Active</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link" href="#">Link</a>
      </nav>
    </div>
    )
  }
}

export default connect()(NavBar)