import React, { Component } from 'react'
import loginSVG from '../log_in.svg'

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <h2>Welcome to <b>Spot.</b> </h2>   
        <h4>Use it to browse the local spotify library.</h4>
        <h4>Press the logo to login the app for services on-line.</h4>
        <a className="col-xs-12" href="/login" dangerouslySetInnerHTML={{__html: loginSVG}}></a>
      </div>
    )
  }
}
