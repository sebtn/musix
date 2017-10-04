import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const ArtistList = props => (
  <div className="artist-list-container">
    <Artist />
  </div>
) 


const mapDispatchToProps = dispatch => {
  return {
    // fetchArtist: bindActionCreators(fetchArtist, dispatch),
    fetchArtist: () => { dispatch( fetchArtist() )
      .then(data => dispatch(fetchArtistSuccess(artists) ))
    }
  }
}

export default connect(null, mapDispatchToProps)(ArtistList)