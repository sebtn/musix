import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router'

 export class TracksMain extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount = () => {
    const {id}  = this.props.params
    const {dispatch} = this.props
  }

  renderAlbums = () => {  }
  
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
        <h1 className="albums-title">This is Tarcks</h1>
      </div>
    )
  }
 }

export default connect()(TracksMain)