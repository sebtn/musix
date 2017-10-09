import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { startFetchArtists, fetchArtists } from '../actions/artists'
import { setSearchText } from '../actions/searcher'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    const {dataType} = this.props
  }
/*------------------------------------------------------------------*/
  onInputChange = (event) => {
    const {dispatch} = this.props
    if (event.target.value.length  > 0) {
      dispatch( setSearchText(event.target.value) )
      dispatch( startFetchArtists(this.refs.artistName.value) )
    }
  }
  
/*------------------------------------------------------------------*/	
  render() {
    let {artist} = this.props
    return (
        <div className="col-xs-12 search-container">
          <div className="form-group">
            <input type="text" 
              placeholder="Search Artist"
              className="form-control"
              onChange={(this.onInputChange)}              
              ref="artistName" 
            />
          </div>
        </div>
    )
  }
}

/*------------------------------------------------------------ */
const mapStateToProps = state => {
  const {inputs} = state
  return {
    // artists: artists.toJS(),
    inputs: inputs.toJS()
  }
}
export default connect(mapStateToProps)(SearchBar)

