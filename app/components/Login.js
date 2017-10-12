import React, { Component } from 'react'
import loginSVG from '../log_in.svg'

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <h1><b> Welcome to Spot </b></h1>   
        <h2>Ideal App to browse the local spotify library and find the rigth sound-track.</h2>
        <h2>Press the logo to login into Spotify's services on-line.</h2>
        <h2>Find all your music in one place.</h2>
        <a className="col-xs-12" href="/login" dangerouslySetInnerHTML={{__html: loginSVG}}></a>
      </div>
    )
  }
}
