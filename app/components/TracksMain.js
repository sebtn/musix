import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {TrackBox} from './TrackBox'
import {DetailBox} from './DetailBox'
import { startFetchAlbumTracks, startFetchAlbumDetails } from '../actions/tracks'

 export class TracksMain extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount = () => {
    const {dispatch} = this.props
    const {id}  = this.props.params
    dispatch( startFetchAlbumTracks(id) )
    dispatch( startFetchAlbumDetails(id) )
  }


  renderTracks = () => { 
    const {tracks} = this.props.tracks
    if(tracks !== undefined) {
      return (
        <div className="tracks-main-container">
          { tracks.map( (track, index) => {
            return <TrackBox 
              key={track.id}
              track={track}
            />
          } )}
        </div>
      )
    }
  }

  renderDetails = () => {
    const {details} = this.props.tracks
    if(details !== undefined) {
      return (
        <div className="details-main-container">
          {console.log(details)}
          <DetailBox details={details} />
        </div>
      )
    }
  }
  
  render() {
    return (
      <div className="tracks-main-box">
        <Link to="/" className="btn btn-lg back" role="button" >Back to login</Link>
        <Link to="/artists" className="btn btn-lg back-art" role="button" >Back to artists</Link>
        <Link to="/newReleases" className="btn btn-lg releases" role="button" >New releases</Link>
        <h1 className="tracks-title">The tracks and details</h1>
        <div className="row row-for-tracks-info ">
          <div className="col-lg-6 col-xs-12">{this.renderDetails()}</div>
          <div className="col-lg-6 col-xs-12">{this.renderTracks()}</div>
        </div>
      </div>
    )
  }
 }

 const mapStateToProps = state => {
   const {artists, albums, tracks} = state
   return {
     artists: artists.toJS(),
     albums : albums.toJS(),
     tracks : tracks.toJS()
   }
 }

export default connect(mapStateToProps)(TracksMain)
