import { List, Map, fromJS } from 'immutable'
import {
  RECEIVE_ALBUM_TRACKS,
  FETCH_ALBUM_TRACKS,
  RECEIVE_ALBUM_DETAILS,
  FETCH_ALBUM_DETAILS
} from '../actions/tracks' 

const initialState = Map({
  isFetching: false,
  tracks: List(),
  details: List()
})

function receiveAlbumTracks(state, tracks) {
  var newState = fromJS({
    tracks: tracks, 
    isFetching: false
  })
  return state.merge(newState)
}


function fetchAlbumTracks(state) {
  let newState = Map({
    isFetching: true
  })
  return state.merge(newState)
}

function receiveAlbumDetails(state, details) {
  var newState = fromJS({
    details: details, 
    isFetching: false
  })
  return state.merge(newState)
}

function fetchAlbumDetails(state) {
  let newState = Map({
    isFetching: true
  })
  return state.merge(newState)
}

export default function tracksReducer(state=initialState, action) {
  switch(action.type) {
    case RECEIVE_ALBUM_TRACKS:
      return receiveAlbumTracks(state, action.tracks)

    case FETCH_ALBUM_TRACKS: 
      return fetchAlbumTracks(state)

    case RECEIVE_ALBUM_DETAILS:
     return receiveAlbumDetails(state, action.details)

    case FETCH_ALBUM_DETAILS: 
      return fetchAlbumDetails(state)

    default:
      return state 
    }
}
