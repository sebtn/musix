import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {TrackBox} from './TrackBox'
import {DetailBox} from './DetailBox'
import { startFetchAlbumTracks, startFetchAlbumDetails } from '../actions/tracks'

 export class TracksMain extends Component {


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
          {tracks.map( (track, index) => {
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
          <DetailBox details={details} />
        </div>
      )
    }
  }
  
  /*------------------------------------------------------------------------------------ */
  render() {
    return (
      <div className="tracks-main-box">
        <Link to="/" className="btn btn-xs back-login" role="button" >Back to login</Link>
        <Link to="/artists" className="btn btn-xs back-art" role="button" >Back to artists</Link>
        <div className="row row-for-tracks-info ">
          <div className="col-6">{this.renderDetails()}</div>
          <div className="col-6">{this.renderTracks()}</div>
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
