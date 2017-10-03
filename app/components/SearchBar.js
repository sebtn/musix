import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchArtist } from '../actions/';

class SearchBar extends Component {

/*------------------------------------------------------------------*/
  onInputChange = (event) => {
    const {dispatch} = this.props;
    event.preventDefault()
    let term = this.refs.SearchText.value
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
              ref="SearchText"
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

const mapStateToProps = state => state

export default connect(state => state, mapDispatchToProps)(SearchBar)
