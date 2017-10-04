import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchArtist } from '../actions/'

class SearchBar extends Component {

/*------------------------------------------------------------------*/
  onInputChange = (event) => {
    event.preventDefault()
    let term = this.refs.searchText.value
    this.setState({term: term})
    fetchArtist(term)
  }
  
/*------------------------------------------------------------------*/	
  render() {
    return (
        <div className="search-container">
          <div className="form-group">
            <input type="text" 
              placeholder="Type artist name"
              className="form-control"
              onChange={this.onInputChange}              
              ref="searchText"
						/>
					</div>
        </div>
    )
  }
}

/*------------------------------------------------------------ */
const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: bindActionCreators(fetchArtist, dispatch)
  }
}

// make the term part of the state
const mapStateToProps = state => {
  return {
    searchText: state.searchText
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)

