import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchArtist } from '../actions/artists'
import { setSearchText } from '../actions/searcher';


class SearchBar extends Component {
  constructor(props){
    super(props)
  }

/*------------------------------------------------------------------*/
  onInputChange = (event) => {
    const {dispatch} = this.props
    dispatch( setSearchText(event.target.value) )
    dispatch( fetchArtist(this.refs.artistName.value) )
  }
  
/*------------------------------------------------------------------*/	
  render() {
    let {artist} = this.props
    return (
        <div className="search-container">
          <div className="form-group">
            <input type="text" 
              placeholder="Type artist name"
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
export default connect()(SearchBar)

