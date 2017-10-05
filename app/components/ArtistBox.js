import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class ArtistBox extends Component {

  renderArtist(dataArtist) {
    const name = dataArtist.name ? <h3 className="">{dataArtist.name}</h3> : null  
    const popularity = dataArtist.popularity ? <li><span>Popularity: {dataArtist.popularity}</span></li> : null
    const genre = (dataArtist.genres && dataArtist.genres.length > 0) ? <li><span>Genre: {dataArtist.genres[0]}</span></li> : null
    // const link = [] // here link to another view ?
    return (
      <div className="artist-name">
        {name}
        <ul>
          {popularity}
          {genre}
        </ul>
      </div>
    )
  }
  render() {
    const { artist } = this.props
    const img = (artist.images && artist.images.length ? artist.images[0].url ; 'place holder here!')

    return (
      <div className="col-md-2">
        <div className="little-box">
          <img src={img} className="img-responsive img-container"/>
          {this.renderArtist(artist)}   
        </div>
      </div>
    )
  }
}

export default connect()(ArtistBox)