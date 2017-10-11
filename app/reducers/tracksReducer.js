import { List, Map, fromJS } from 'immutable'
import {
  RECEIVE_ALBUM_TRACKS,
  FETCH_ALBUM_TRACKS,
  RECEIVE_ALBUM
} from '../actions/tracks' 

const initialState = Map({
  isFetching: false,
  tracks: List(),
  album: List()
})

function receiveAlbumTarcks(state, tracks) {
  var newState = fromJS({
    tracks, 
    isFetching: false
  })
  return state.merge(newState)
}

function receiveAlbum(state, album) {
  var newState = fromJS({
    album, 
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

export default function tracksReducer(state=initialState, action) {
  switch(action.type) {
    case RECEIVE_ALBUM_TRACKS:
      return receiveAlbumTarcks(state, action.tracks)

    case FETCH_ALBUM_TRACKS: 
      return fetchAlbumTracks(state)

    case RECEIVE_ALBUM:
     return receiveAlbum(state, action.album)

    default:
      return state 
    }
}
