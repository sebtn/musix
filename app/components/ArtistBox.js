import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Router, Link} from 'react-router'


export class ArtistBox extends Component {
  
  renderArtistBox = (data) => {
    const name = data.name ? <h4>{data.name}</h4> : null
    const popularity = data.popularity ? <h6>{data.popularity}</h6> : null
    return(
      <div className="artist-box">
        {name}
        {popularity}
        <br />
        <br />
      </div>
    )
  } 

  render () {
    const {artist} = this.props
    return(
      <div className="col-md-2">
        {this.renderArtistBox(artist)}
      </div>
    )
  }
}

export default connect(state => state)(ArtistBox)