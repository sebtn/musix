import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {ArtistBox} from './ArtistBox'
import SearchBar from './SearchBar'

 export class ArtistsMain extends Component {
    constructor(props) {
    super(props)
  }    
  
  renderArtists = () => {
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

  render() {
    return (
      <div className="artists-main-box">
        <Link to="/" className="btn btn-lg back" role="button" > Back to login </Link>
        <Link to="/newReleases" className="btn btn-lg releases" role="button" >New releases</Link>
        <h1 className="artists-title">The artists</h1>
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