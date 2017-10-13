import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router'

export class NewReleasesMain extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount = () => {
    const {dispatch} = this.props
    dispatch( startFetchAlbumTracks(id) )
  }


}