import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import * as actions from '../actions/'

export class SearchBar extends Component {
	render() {
		let {dispatch, searchText} = this.props
		return(
			<div className="search-container">
				<div className="form-group" >
				    <input ref="searchText" 
					    className="form-control" 
					    type="search" 
					    placeholder="Search Music"  
					    value={searchText} 
				    	onChange={ () => {
					    	let searchText = this.refs.searchText.value
					    	dispatch( actions.setSearchText(searchText) )
					    }} />
				</div>
			</div>
		)	
	}
}
/*--------------------------------------------------------------*/

export default connect(
	(state) => {
		return {			
			searchText: state.searchText 
		}
	}	
)(SearchBar)