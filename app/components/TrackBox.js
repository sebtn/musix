import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Router, Link} from 'react-router'


export class TrackBox extends Component {  

  renderTrackBox = (data) => {
    const artistName  = data.artists[0].name ? <div>Artists: {data.artists[0].name}</div> : null
    const trackName   = data.name ? <div>Track title: {data.name} </div> : null
    const trackNumber = data.track_number ? <div>Track Number: {data.track_number}</div> : null
    const duration    = data.duration_ms ? <div>Time: {data.duration_ms}</div> : null

    return (
      <div className="track-box">
        {artistName}
        {trackNumber}
        {trackName}
        {duration}
      </div>
    )
  } 

  render () {
    const {track} = this.props
    
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 wrapper-box">
        <div className="card-for-tracks ">
          {this.renderTrackBox(track)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(TrackBox)

