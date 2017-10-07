import { List, Map, fromJS } from 'immutable'
import {
  SPOTIFY_TOKENS, 
  SPOTIFY_ME_BEGIN, 
  SPOTIFY_ME_SUCCESS, 
  SPOTIFY_ME_FAILURE
} from '../actions'

// /** The initial state; no tokens and no user info */
const initialState = {
  accessToken: null,
  refreshToken: null,
  auth: {
    loading: false,
    country: null,
    display_name: null,
    email: null,
    external_urls: {},
    followers: {},
    href: null,
    id: null,
    images: [],
    product: null,
    type: null,
    uri: null,
  }
}

function spotifyTokens(state) {
  var newState = Map({
    refreshToken,
    accessToken
  })
  return state.merge(newState)
}

function spotifyMeBegin(state, auth) {
  var newState = fromJS({
    auth, 
    loading: true
  })
  return state.merge(newState)  
}

function spotifyMeSuccess(state, auth) {
  var newState = fromJS({
    auth, 
    data,
    loading: false
  })
  return state.merge(newState)  
}

/* Auth reducer */
export default function reduce(state = initialState, action) {
  switch (action.type) {

  //set the token
  case SPOTIFY_TOKENS:
    return spotifyTokens(state, action.accessToken, action.refreshToken)

  case SPOTIFY_ME_BEGIN:
    return spotifyMeBegin(state, action.loading) 

  case SPOTIFY_ME_SUCCESS:
    return spotifyMeSuccess(state, action.data, action.loading)

  case SPOTIFY_ME_FAILURE:
    return state

  default:
    return state
  }
}