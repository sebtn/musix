import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMyInfo, setTokens } from '../actions/'
import {Router, Link} from 'react-router'

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
        <p>App now connected to spotify API!</p>
        <Link to={`/artists`} role="button">Click here to begin browsing</Link>
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
