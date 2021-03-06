import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {AlbumBox} from './AlbumBox'
import { startFetchArtistAlbums } from '../actions/albums'

 export class AlbumsMain extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount = () => {
    const {id}  = this.props.params
    const {dispatch} = this.props
    const {albums} = this.props.albums
    dispatch( startFetchArtistAlbums(id) )
  }

  renderAlbums = () => {  
    const {albums} = this.props.albums

    if (albums !== undefined) { 
      return (
        <div className="albums-main-container">
          {albums.map( (album, index) => {
            return <AlbumBox 
              key={album.id} 
              album={album}
              />
          } )}
        </div>
     )
    }
  }

  render() {
    return (
      <div className="albums-main-box">
        <Link to="/" className="btn btn-lg back" role="button" >Back to login</Link>
        <Link to="/artists" className="btn btn-lg back-art" role="button" >Back to artists</Link>
        <Link to="/newReleases" className="btn btn-lg releases" role="button" >New releases</Link>
        <h1 className="albums-title">The Albums</h1>
        {this.renderAlbums()}
      </div>
    )
  }
 }

 const mapStateToProps = state => {
   const {artists, albums} = state
   return {
     artists: artists.toJS(),
     albums: albums.toJS(),
   }
 }

export default connect(mapStateToProps)(AlbumsMain)