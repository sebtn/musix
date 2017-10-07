import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Router, Link} from 'react-router'

export class ArtistBox extends Component {
  
  renderArtistBox = (data) => {
    const name = data.name ? <h3>{data.name}</h3> : null
    const popularity = data.popularity ? <span>{data.popularity}</span> : <span>Not provided</span> 
    const genre = ( data.genres && data.genres.length > 0) ? <span>{data.genres[0]}</span> : <span>Not provided</span> 
    const link = data.id ? <Link  role="button">See Albums</Link> : null

    return (
      <div className="artist-box">
        {name}
        <div className="titles">
          {/* <b className="genre">Genres: {genre}</b>
          <b className="popularity-line">Popularity:{popularity}</b> */}
        </div>
         <button className="btn btn-lg get-album-btn">{link}</button> 
      </div>
    )
  } 

  render () {
    const {artist} = this.props
    const imageUrl = (artist.images && artist.images.length ? artist.images[0].url : 'https://s3.amazonaws.com/sebimages/score-placeholder.png')
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 wrapper-box">
        <div className="card-for-artist ">
          <div className="img-wrap">
          <img src={imageUrl} className="img-from-api img-responsive" />
          </div>
          {this.renderArtistBox(artist)}
        </div>
      </div>
    )
  }
}

export default connect(state => state)(ArtistBox)