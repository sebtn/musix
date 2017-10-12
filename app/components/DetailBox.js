import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Router, Link} from 'react-router'

export class DetailBox  extends Component {  

  renderDetailBox = (data) => {
    const albumName   = data.name ? <sapn>Album: {data.name}</sapn> : null
    const albumLabel  = data.label ? <sapn>Label: {data.label}</sapn> : null
    const releaseDate = data.release_date ? <sapn>Released: {data.release_date}</sapn> : null
    const popularity  = data.popularity ? <sapn>Popularity: {data.popularity}</sapn> : null
    const genre = ( data.genres && data.genres.length > 0) ? <span>{data.genres[0]}</span> : null

    return (
      <div className="detail-box">
        <li>{albumName}</li>
        <li>{albumLabel}</li>
        <li>{releaseDate}</li>
        <li>{popularity}</li>
        <li>{genre}</li>
      </div>
    )
  } 

  render () {
    const {details} = this.props
    const imageUrl = (details.images && details.images.length ? 
      details.images[0].url : 'https://s3.amazonaws.com/sebimages/score-placeholder.png')

    return (
      <div className="wrapper-box">
        <div className="card-for-detail">
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

