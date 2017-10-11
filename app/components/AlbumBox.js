import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Router, Link} from 'react-router'


export class AlbumBox extends Component {  

  renderAlbumBox = (data) => {
    const name       = data.name ? <div>Album: {data.name} </div> : null
    const artistName = data.artists[0].name ? <div>Artists: {data.artists[0].name}</div> : null
    const link       = data.id ? <Link to={`/album/${data.id}`} role="button" > More  </Link> : null

    return (
      <div className="album-box">
        {artistName}
        {name}
        <button className="btn btn-lg get-album-btn"  >
        {link}
        </button> 
      </div>
    )
  } 

  render () {
    const {album} = this.props
    const imageUrl = (album.images && album.images.length ? 
      album.images[0].url : 'https://s3.amazonaws.com/sebimages/score-placeholder.png')

    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 wrapper-box">
        <div className="card-for-album ">
          <div className="img-wrap">
          <img src={imageUrl} className="img-from-api img-responsive" />
          </div>
          {this.renderAlbumBox(album)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(AlbumBox)

