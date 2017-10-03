import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import SearchBar from './SearchBar'
import NavBar from './NavBar'

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <h1>Spotify flow init</h1>
        <NavBar/>
        <SearchBar/>
        {this.props.children}
      </div>
    )
  }
}

export default connect()(Main)