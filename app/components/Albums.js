import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import SearchBar from './SearchBar'

 export class Albums extends Component {
  
  renderArtists = () => {
    const {dispatch} = this.props
    const {albums} = this.props.albums
    // const {input} = this.props.inputs
    
    if (albums.items !== undefined) {
      return (
        <div className="albums-main-container">
          { albums.items.map((artist, index) =>  {
            /*return <ArtistBox key={index} key={artist.id} artist={artist}/>*/
          } )} 
        </div>
      )
    }
    
  }
  /*------------------------------------------------------------------------------------ */
  render() {
    return (
      <div className="almbums-main-box">
        {/*<SearchBar  />*/}
        <h1 className="albums-title">This is albums</h1>
      </div>
    )
  }
 }

const mapStateToProps = state => {
  const {albums, inputs} = state
  return {
    albums: albums.toJS(),
    // inputs: inputs.toJS()
  }
}

export default connect(mapStateToProps)(Albums)