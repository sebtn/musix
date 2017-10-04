import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import NavBar from './NavBar'


class Main extends Component {

/*------------------------------------------------------------------*/	
  render() {
    let {children, artist} = this.props
    return (
      <div className="main-container">
        <NavBar   />
        {children}
      </div>
    )
  }
}

export default connect()(Main)