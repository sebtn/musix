import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Router, Link} from 'react-router'


export class TrackBox extends Component {  

  converMsToSeconds = (num) => {
    let min = Math.floor((num/1000/60) << 0)
    let sec = Math.floor((num/1000) % 60)
    return min + ' : ' + sec
  }

  renderTrackBox = (data) => {
    const trackNumber = data.track_number ? <sapn>{data.track_number}.  </sapn> : null
    const trackName   = data.name ? <sapn>{data.name} <span> / </span> </sapn> : null
    const duration    = data.duration_ms ? <sapn> {this.converMsToSeconds(data.duration_ms)}  </sapn> : null

    return (
      <div className="track-box">
        {trackNumber}
        {trackName}
        {duration}
      </div>
    )
  } 

  render () {
    const {track} = this.props
    
    return (
      <div className="col-xs-12 wrapper-box">
        <div className="card-for-tracks ">
          <ul>{this.renderTrackBox(track)}</ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(TrackBox)

