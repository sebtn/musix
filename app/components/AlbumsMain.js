import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import { startFetchArtistAlbums } from '../actions/albums'

 export class AlbumsMain extends Component {
  
  componentDidMount = () => {
    const {dispatch} = this.props
    const {artists} = this.props.artists
    // const {input} = this.props
    // dispatch( startFetchArtistAlbums() )
    console.log(this.props)
    
    // artists.items.map((el, index) => {
      // return console.log(el.id)
    // })
  }

  renderAlbums = () => {
      // return ( 
      //   <div>
      //     {console.log(artists)}
      //   </div>
      // )
    }
  
  /*------------------------------------------------------------------------------------ */
  render() {
    return (
      <div className="albums-main-box">
        <Link to="/" className="btn btn-xs back-login" role="button" >
           Back to login
         </Link>
         <Link to="/artists" className="btn btn-xs back-art" role="button" >
           Back to artists
         </Link>
        <h1 className="albums-title">This is albums</h1>
        {this.renderAlbums()}
      </div>
    )
  }
 }

const mapStateToProps = state => {
  const {albums, inputs, artists} = state
  return {
    albums: albums.toJS(),
    artists: artists.toJS(),
    inputs: inputs.toJS()
  }
}

export default connect(mapStateToProps)(AlbumsMain)