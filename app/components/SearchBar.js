import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {setSearchText, fetchArtist}  from '../actions/'

export class SearchBar extends Component {
	constructor(props) {
    super(props)
    this.state = { term: '' }
	}

/*------------------------------------------------------------------*/
	onInputChange = (event) => {
		event.preventDefault()
		let term = this.refs.SearchText.value
		this.setState({term: term})
		this.props.fetchArtist(term)
		// dispatch(fetchArtist(term) )
	}

/*------------------------------------------------------------------*/	
	render() {
		let {dispatch, searchText} = this.props
		return(
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

/*------------------------------------------------------------------*/
function mapDispatchToProps (dispatch)  {
  return bindActionCreators({ fetchArtist, setSearchText }, dispatch)
}
/*--------------------------------------------------------------*/

/*null replaces the state, which is not being used */
export default connect(null, mapDispatchToProps)(SearchBar)