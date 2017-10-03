import Spotify from 'spotify-web-api-js'
const spotifyApi = new Spotify()

// Types
export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS'
export const SPOTIFY_ME_BEGIN = 'SPOTIFY_ME_BEGIN'
export const SPOTIFY_ME_SUCCESS = 'SPOTIFY_ME_SUCCESS'
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE'
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'

/* Set the app's access and refresh tokens 
 * replaces token once it expires
 * token will expire every hour
*/
export function setTokens({accessToken, refreshToken}) {
  if (accessToken) { spotifyApi.setAccessToken(accessToken) }
  return { type: SPOTIFY_TOKENS, accessToken, refreshToken }
}

/* get the user's info from the /me api nesting thunks */
export function getMyInfo() {
  return dispatch => {
    dispatch({ type: SPOTIFY_ME_BEGIN})
    spotifyApi.getMe().then(data => {
      dispatch({ type: SPOTIFY_ME_SUCCESS, data: data })
    }).catch(e => {
      dispatch({ type: SPOTIFY_ME_FAILURE, error: e })
    })
  }
}

/* Simple way to get the text on the search bar */
export function setSearchText(searchText)  {
	return { type: SET_SEARCH_TEXT, searchText }
}

/* Fetch artist using the api return a promise */
export function fetchArtist(artist_name)  {
	return spotifyApi.searchArtists(artist_name)
  .then( data => {
    console.log('Search artists by', data)
  })  
  .catch(err => console.error(err) )
}
