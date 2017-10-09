import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const Jumbotron = () => (
  <div className="jumbotron ">
    <span className="title">Addtional info</span>
    <p className="lead">
      App now connected to spotify API. <br />
      This is a simple UI that uses spotify API to browse your favorite artists. 
      This page is shown on authentication success.
      The assign token will last for an hour, afterwards
      a re-authentication  is necessary,
      just go back a login screen and press the button to login again. <br />
      <br />
      Please click the link to begin browsing. 
    </p>
  </div>
)

export default connect()(Jumbotron)