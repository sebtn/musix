import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
  getMyInfo,
  setTokens,
  fetchArtist,
  setSearchText
}   from '../actions/';

class User extends Component {
  /** get the tokens from react-router and initiate loading the info */
  componentDidMount() {
    const {dispatch, params} = this.props;
    const {accessToken, refreshToken} = params;
    setTokens({accessToken, refreshToken})
    getMyInfo()
  }

  /*------------------------------------------------------------------*/
  onInputChange (event) {
    const {dispatch} = this.props;
    event.preventDefault()
    let term = this.refs.SearchText.value
    this.setState({term: term})
    console.log(term)
    fetchArtist(term)
  }
  
/*------------------------------------------------------------------*/	
  render() {
    const { accessToken, refreshToken, user } = this.props;
    // const { loading, display_name, images, id, email, external_urls, href, country, product } = user;
    // const imageUrl = images[0] ? images[0].url : "";
    // if we're still loading, indicate such
    // if (loading) {
    //   return <h2>Loading...</h2>;
    // }
    return (
      <div className="user">
        <p>Using the app now!</p>
        {/* <h2>{`Logged in as ${display_name}`}</h2> */}
        <div className="user-content">
          {/* <img src={imageUrl} />
          <ul>
            <li><span>Display name</span><span>{display_name}</span></li>
            <li><span>Id</span><span>{id}</span></li>
            <li><span>Email</span><span>{email}</span></li>
            <li><span>Spotify URI</span><span><a href={external_urls.spotify}>{external_urls.spotify}</a></span></li>
            <li><span>Link</span><span><a href={href}>{href}</a></span></li>
            <li><span>Profile Image</span><span><a href={imageUrl}>{imageUrl}</a></span></li>
            <li><span>Country</span><span>{country}</span></li>
            <li><span>Product</span><span>{product}</span></li>
          </ul> */}
        </div>
        <div className="search-container">
          <div className="form-group">
            <input type="text" 
              placeholder="Type artist name"
              className="form-control"
              onChange={this.onInputChange.bind(this)}
              ref="SearchText"
						/>
					</div>
        </div>
      </div>
    );
  }
}

/*------------------------------------------------------------ */
const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: bindActionCreators(fetchArtist, dispatch),
    setTokens: bindActionCreators(setTokens, dispatch),
    getMyInfo: bindActionCreators(setTokens, dispatch)
  }
}

const mapStateToProps = state => state

export default connect(state => state, mapDispatchToProps)(User);
