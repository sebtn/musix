import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMyInfo, setTokens } from '../actions/'
import {Router, Link} from 'react-router'

import Jumbotron from './Jumbotron'

class Auth extends Component {

  componentDidMount() {
    const {dispatch, params} = this.props
    const {accessToken, refreshToken} = params
    setTokens({accessToken, refreshToken})
    getMyInfo()
  } 

/*------------------------------------------------------------------*/	
  render() {
    const { accessToken, refreshToken, auth } = this.props

    return (
      <div className="auth-container">
        <Jumbotron />
        <Link to={`/artists`} role="button" className="letters">
          Begin Here!
        </Link>
      </div>
    )
  }
}

/*------------------------------------------------------------ */
const mapDispatchToProps = dispatch => {
  return {
    setTokens:   bindActionCreators(setTokens, dispatch),
    getMyInfo:   bindActionCreators(setTokens, dispatch),
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
