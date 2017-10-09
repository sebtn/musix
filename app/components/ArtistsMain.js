import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {ArtistBox} from './ArtistBox'
import SearchBar from './SearchBar'

 export class ArtistsMain extends Component {
  
  renderArtists = () => {
    const {dispatch} = this.props
    const {artists} = this.props.artists
    const {input} = this.props.inputs
    
    if (artists.items !== undefined) {
      return (
        <div className="artists-main-container">
          { artists.items.map((artist, index) =>  {
            return <ArtistBox key={index} key={artist.id} artist={artist}/>
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
           Take me back 
         </Link>
        <SearchBar  />
        {this.renderArtists()}
      </div>
    )
  }
 }

const mapStateToProps = state => {
  const {artists, inputs} = state
  return {
    artists: artists.toJS(),
    inputs: inputs.toJS()
  }
}

export default connect(mapStateToProps)(ArtistsMain)