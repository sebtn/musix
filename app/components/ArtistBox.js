import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Router, Link} from 'react-router'

import {vinyl} from '../vinyl.svg'

export class ArtistBox extends Component {
  
  renderArtistBox = (data) => {
    const name = data.name ? <h4>{data.name}</h4> : null
    const popularity = data.popularity ? <span>{data.popularity}</span> : <span>Not provided</span> 
    const genre = ( data.genres && data.genres.length > 0) ? <span>{data.genres[0]}</span> : <span>Not provided</span> 
    const link = data.id ? <Link  role="button">Expand info</Link> : null

    return (
      <div className="artist-box">
        {name}
        <div>
          <b className="genre">Genres: {genre}</b>
          <b className="popularity-line">Popularity:{popularity}</b>
        </div>
         <button className="btn btn-success btn-lg ">{link}</button> 
      </div>
    )
  } 

  render () {
    const {artist} = this.props
    const imageUrl = (artist.images && artist.images.length ? artist.images[0].url : vinyl)
    return (
      <div className="col-md-3 wrapper-box">
        <div className="card-for-artist center">
          <div className="img-wrap">
          <img src={imageUrl} className="img-from-api " />
          </div>
          {this.renderArtistBox(artist)}
        </div>
      </div>
    )
  }
}

export default connect(state => state)(ArtistBox)