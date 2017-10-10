import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import { bindActionCreators } from 'redux'

import {ArtistBox} from './ArtistBox'
import SearchBar from './SearchBar'

import { startFetchArtistAlbums, fetchAlbums} from '../actions/albums'

 export class ArtistsMain extends Component {
  
  renderArtists = () => {
    const {dispatch, onClick} = this.props
    const {artists} = this.props.artists
    const {input} = this.props.inputs
    
    if (artists.items !== undefined) {
      return (
        <div className="artists-main-container">
          { artists.items.map((artist, index) =>  {
            return <ArtistBox 
              key={artist.id} 
              artist={artist} 
              />
          } )} 
        </div>
      )
    }
  }
  /*------------------------------------------------------------------------------------ */
  render() {
    const {dispatch} = this.props
    return (
      <div className="artists-main-box">
        <Link to="/" className="btn btn-xs back" role="button" >
           Back to login
         </Link>
        <SearchBar  />
        {this.renderArtists()}
      </div>
    )
  }
 }

const mapStateToProps = state => {
  const {artists, inputs, albums} = state
  return {
    artists: artists.toJS(),
    inputs: inputs.toJS(),
    albums: albums.toJS()
  }
}

export default connect(mapStateToProps)(ArtistsMain)