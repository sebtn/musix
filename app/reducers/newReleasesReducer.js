import { List, Map, fromJS } from 'immutable'
import {
  FETCH_NEW_RELEASES,
  RECEIVE_NEW_RELEASES
} from '../actions/newReleases'

const initialState = Map({
  albums: List(),
  // isFetching: false
})

function receiveNewReleases(state, albums) {
  var newState = fromJS({
    albums: albums,
    // isFetching: false
  })
  return state.merge(newState)
}

function fetchNewReleases(state) {
  var newState = Map({
    isFetching: true
  })
  return state.merge(newState)
}

export default function newReleasesReducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_NEW_RELEASES:
      return receiveNewReleases(state, action.albums)

    case FETCH_NEW_RELEASES:
      return fetchNewReleases(state)

    default:
      return state
  }
}