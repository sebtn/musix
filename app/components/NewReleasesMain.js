import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {startFetchNewReleases, receiveNewReleases} from '../actions/newReleases'

export class NewReleasesMain extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    const {dispatch} = this.props
    dispatch( startFetchNewReleases() )
    // dispatch( receiveNewReleases )
  }

  render() {
    return (
      <div className="NewReleases-main-box">
        <h1>This is releases</h1>
      </div>
    )
  }

}

const mapStateToProps = state => {
  const {newReleases} = state
  return {
    newReleases: newReleases.toJS(),
  }
}

export default connect(mapStateToProps)(NewReleasesMain)