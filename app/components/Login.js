import React, { Component } from 'react'
import loginSVG from '../log_in.svg'

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <h2>Press the logo to use the spotify API</h2>
        <a href="/login" dangerouslySetInnerHTML={{__html: loginSVG}}></a>
      </div>
    )
  }
}
