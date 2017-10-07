import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {ArtistBox} from './ArtistBox'
import SearchBar from './SearchBar'

 export class ArtistsMain extends Component {
  
  renderArtists = () => {
    const piece = 5
    const {dispatch} = this.props
    const {artists} = this.props.artists
    const {input} = this.props.inputs
    let result = []
    
    if (artists.items !== undefined) {
      return (
        <div>
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
        <SearchBar />
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