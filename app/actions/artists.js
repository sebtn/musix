import spotifyApi from './spoty'

/* Take data info for further use 
* create something that can hold the info needed
* passing it through the reducer and then print it.
* render artist
*/

/* Fetch artist using the api return a promise
* is an action generator using thunks
*/
export const FETCH_ARTIST = 'FETCH_ARTIST'
export const fetchArtist = (artistName) =>  {
  return dispatch => {
    dispatch( requestArtists(artistName) )
    return spotifyApi.searchArtists(artistName)
      .then( json => dispatch( receiveArtists(json)) )
      .catch( err => console.log(err) )
  }
}

/* getArtist and requestArtists are different actions 
* both plural one using json
*/
export const REQUEST_ARTISTS ='REQUEST_ARTISTS'
export const requestArtists = () => {
  return {
    type: REQUEST_ARTISTS
  }
}

/* Plural */
export const RECEIVE_ARTISTS ='RECEIVE_ARTISTS'
export const receiveArtists = (json) => {
  return {
    type: RECEIVE_ARTISTS,
    artists: json.artists
  }
}

/* get artist details using the id another action 
* generator using request and get artist actions
* One artist, non plural
*/
export const FETCH_ARTIST_INFO = 'FETCH_ARTIST_INFO'
export const fetchArtistInfo = (artistId) => {
  return dispatch => {
    dispatch( requestArtistInfo(artistId) )
    return spotifyApi.getArtist(artistId)
      .then(json => dispatch( receiveArtistInfo(json) ))
      .catch(err => console.log(err))
  }
}

/* Single Artist, receive info for one (not plural) */
export const RECEIVE_ARTIST_INFO ='RECEIVE_ARTIST_INFO'
const receiveArtistInfo = (json) => {
  return {
    type: RECEIVE_ARTISTS_INFO,
    artist: json
  }
}

/* Single Artist, request info for one (not plural) */
export const REQUEST_ARTIST_INFO ='REQUEST_ARTIST_INFO'
export const requestArtistInfo = () => {
  return {
    type: REQUEST_ARTIST_INFO
  }
}
