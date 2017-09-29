import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import SearchBar from './SearchBar'
import NavBar from './NavBar'

class Main extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <NavBar/>
        <SearchBar/>
      </div>
    )
  }
}

export default connect()(Main)