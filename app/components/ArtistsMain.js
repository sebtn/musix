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
    // console.log('ArtistMain: ', this.props)
    
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
    return (
      <div className="artists-main-box">
        <Link to="/" className="btn btn-xs back" role="button" >
           Back to login
         </Link>
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