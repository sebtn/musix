import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchArtist } from '../actions'

class ArtistContainer extends Component {
  constructor() {
    super()
    this.state = { term: '' }
  }
  
  componentWillReceiveProps(nextProps) {
    let {term, dispatch} = this.props

  }

/*------------------------------------------------------------------*/	
  render() {
    return (

    )
  }
}

/*------------------------------------------------------------ */
const mapDispatchToProps = dispatch => {
  return {

  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer)
