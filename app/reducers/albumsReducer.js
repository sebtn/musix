import { List, Map, fromJS } from 'immutable'
import { 
  RECEIVE_ARTIST_ALBUMS,
  FETCH_ARTIST_ALBUMS
} from '../actions/albums'    

const initialState = Map({
  isFetching: false,
  albums: List(),
  details: Map()
})

function receiveArtistAlbums(state, albums) {
  var newState = fromJS({
    albums: albums, 
    isFetching: false
  })
  return state.merge(newState)
}

function fetchArtistAlbums(state) {
  let newState = Map({
    isFetching: true
  })
  return state.merge(newState)
}

export default function albumsReducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_ARTIST_ALBUMS:
      return receiveArtistsAlbums(state, action.albums)

    case FETCH_ARTIST_ALBUMS: 
      return fetchArtistsAlbums(state)

    default:
      return state 
    }
}