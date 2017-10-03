import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { accessToken, refreshToken, user } = this.props;
    return (
      <div className="user">
        <h2>Using the app connectected to spotify API!</h2>
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

export default connect(state => state, mapDispatchToProps)(Auth)
