import spotifyApi from './spoty'

export const START_FETCH_NEW_RELEASES = 'START_FETCH_NEW_RELEASES'
export const startFetchNewReleases = dispatch => {
  dispatch( fetchNewReleases() )
    return spotifyApi.getNewReleases()
      .then( json => dispatch( receiveNewReleases(json) ))
      .catch( err => console.log(err) )
} 

export const FETCH_NEW_RELEASES = 'FETCH_NEW_RELEASES'
export const fetchNewReleases = () => {
  return {
  type: FETCH_NEW_RELEASES,
  }
}

export const RECEIVE_NEW_RELEASES = 'RECEIVE_NEW_RELEASES'
export const receiveNewReleases = (json) => {
  return {
    type: RECEIVE_NEW_RELEASES,
    albums: json.items
  }
}