import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const Jumbotron = () => (
  <div className="jumbotron ">
    <span className="title">Addtional info</span>
    <p className="lead">
      The application is now connected to spotify API. Yas!<br />
      This page is shown on authentication success. Again. Yas! <br />
      Featuring a simple UI using spotify's API to browse your favorite music artists. <br />
      Important: Spotify has decided since may 2017, the assign token will last an hour, <br />
      afterwards re-authentication is necessary, to keep using the app just go back to the login <br />
      screen and press the button to start the flow again. <br />
      The application won't tolarate a refresh, if you decide to re-load <br />
      the page you  might have to login again. <br />
      The refesh token could expire once the browser refreshes.
      Each session is tokenized. 
      <br />
      <br />
      Please click the link below to begin using the app. 
    </p>
  </div>
)

export default connect()(Jumbotron)