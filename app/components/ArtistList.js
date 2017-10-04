import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const ArtistList = artists => (
  <div className="artist-list-container">
    <ul>
      {artists.map( ({data}) => (
        <li>{data}</li>
      )}
    </ul>
  </div>
) 


export default connect()(ArtistList)