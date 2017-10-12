import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router'

const Jumbotron = () => (
  <div className="jumbotron ">
    <span className="title">Additional info and how-to:</span>
    <p className="lead">
      The application is now authenticated and connected to spotify API.
      This page is shown on authentication success. Yas, welcome! <br />
      Featuring a react redux built UI using spotify's API to browse your favorite music artists. <br />
      <br />
      Since may 2017 Spotify has decided the auth token will last an hour, 
      afterwards, re-authentication is necessary. 
      To keep using the app just go back to the login 
      screen and press the button to start the flow again. <br />
      <br />
      The application won't tolarate a refresh, if you decide to re-load 
      the page you might have to login again. <br />
      The refesh token could expire once the browser refreshes.
      Each session has been tokenized. 
      <br />
      <br />
      Please click the link below to begin using the app. 
    </p>
    <Link to={`/artists`} role="button" className="letters"> Begin Here!</Link>
  </div>
)

export default connect()(Jumbotron)