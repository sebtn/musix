import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Router, Link} from 'react-router'

const BackToLoginButton = () => (
  <div className="nav-container">
    <Link to="/" 
      className="btn btn-info btn-lg" 
      role="button" >
       Take me back 
     </Link>
  </div>
)

export default connect()(BackToLoginButton)