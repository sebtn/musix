import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMyInfo, setTokens } from '../actions/'

import SearchBar from './SearchBar'

class Auth extends Component {

  componentDidMount() {
    const {dispatch, params} = this.props
    const {accessToken, refreshToken} = params
    setTokens({accessToken, refreshToken})
    getMyInfo()
  }

/*------------------------------------------------------------------*/	
  render() {
    const { accessToken, refreshToken, user } = this.props
    return (
      <div className="user">
        <h4>App now using connectected to spotify API!</h4>
        <SearchBar />
      </div>
    )
  }
}

/*------------------------------------------------------------ */
const mapDispatchToProps = dispatch => {
  return {
    setTokens:   bindActionCreators(setTokens, dispatch),
    getMyInfo:   bindActionCreators(setTokens, dispatch)
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
