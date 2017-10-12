import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Router, Link} from 'react-router'

export class DetailBox  extends Component {  

  renderDetailBox = (data) => {
    const albumName   = data.name ? <div>Album: {data.name}</div> : null
    const albumLabel  = data.label ? <div>Label: {data.label}</div> : null
    const releaseDate = data.release_date ? <div>Released: {data.release_date}</div> : null
    const popularity  = data.popularity ? <div>Popularity: {data.popularity}</div> : null
    const genre = ( data.genres && data.genres.length > 0) ? <span>{data.genres[0]}</span> : null


    return (
      <div className="detail-box">
      {albumName}
      {albumLabel}
      {releaseDate}
      {popularity}
      {genre}
      </div>
    )
  } 

  render () {
    const {details} = this.props
    const imageUrl = (details.images && details.images.length ? 
      details.images[0].url : 'https://s3.amazonaws.com/sebimages/score-placeholder.png')

    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 wrapper-box">
        <div className="card-for-detail ">
          <div className="img-wrap">
            <img src={imageUrl} className="img-from-api img-responsive" />
          </div>
          {this.renderDetailBox(details)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(DetailBox)

