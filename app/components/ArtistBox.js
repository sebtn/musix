import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Router, Link} from 'react-router'

import {vinyl} from '../vinyl.svg'

export class ArtistBox extends Component {
  
  renderArtistBox = (data) => {
    const name = data.name ? <h4>{data.name}</h4> : null
    const popularity = data.popularity ? <h6>{data.popularity}</h6> : null
    const genre = ( data.genres && data.genres.length > 0) ? <li><span>{data.genres[0]}</span></li> : null
    const link = data.id ? <Link className="btn btn-default" role="button">Tell me more about artist</Link> : null

    return (
      <div className="artist-box">
        {name}
        <ul>
          {popularity}
          <br />
          {genre}
          {link}
        </ul>
        <br />
      </div>
    )
  } 

  render () {
    const {artist} = this.props
    const imageUrl = (artist.images && artist.images.length ? artist.images[0].url : vinyl)
    return (
      <div className="col-md-3">
        <div className="card-for-artist">
          <img src={imageUrl} className="img-responsive center-block" />
          {this.renderArtistBox(artist)}
        </div>
      </div>
    )
  }
}

export default connect(state => state)(ArtistBox)