import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router'

 export class AlbumsMain extends Component {
  
  renderAlbums = () => {
    const {dispatch} = this.props
    const {albums} = this.props.albums
    
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
      <div className="albums-main-box">
        <Link to="/" className="btn btn-xs back-login" role="button" >
           Take me back to login
         </Link>
         <Link to="/artists" className="btn btn-xs back-art" role="button" >
           Take me back to artists
         </Link>
        <h1 className="albums-title">This is albums</h1>
      </div>
    )
  }
 }

const mapStateToProps = state => {
  const {albums, inputs} = state
  return {
    albums: albums.toJS(),
  }
}

export default connect(mapStateToProps)(AlbumsMain)