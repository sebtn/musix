import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {AlbumBox} from './AlbumBox'
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


  renderTracks = () => {  }
  
  /*------------------------------------------------------------------------------------ */
  render() {
    return (
      <div className="tracks-main-box">
        <Link to="/" className="btn btn-xs back-login" role="button" >Back to login</Link>
        <Link to="/artists" className="btn btn-xs back-art" role="button" >Back to artists</Link>
        <Link to="/tracks" className="btn btn-xs back-art" role="button" >FF to tracks</Link>
        <h1 className="tracks-title">This is tracks</h1>
      </div>
    )
  }

 }

 // const mapStateToProps = state => {
 //   const {artists, albums} = state
 //   return {
 //     artists: artists.toJS(),
 //     albums: albums.toJS()
 //   }
 // }


// export default connect(mapStateToProps)(AlbumsMain)
export default connect()(TracksMain)
