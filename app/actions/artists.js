import spotifyApi from './spoty'
import {debounce} from 'lodash'
/* Take data info for further use 
* create something that can hold the info needed
* passing it through the reducer and then print it.
* render artist
*/

/* Fetch artist using the api return a promise
* is an action generator using thunks 
*/
export const START_FETCH_ARTISTS = 'START_FETCH_ARTISTS'
export const startFetchArtists = (artistName) =>  {
  return dispatch => {
    dispatch( fetchArtists(artistName) )
    return spotifyApi.searchArtists(artistName)
    .then( json => dispatch( receiveArtists(json)) )
    .catch( err => console.log(err) )
  }
}

/* Using this inside the start action is the action
* generated.
*/
export const FETCH_ARTISTS ='FETCH_ARTISTS'
export const fetchArtists = () => {
  return {
    type: FETCH_ARTISTS
  }
}

/* Plural, used to payload the artist data */
export const RECEIVE_ARTISTS ='RECEIVE_ARTISTS'
export const receiveArtists = (json) => {
  return {
    type: RECEIVE_ARTISTS,
    artists: json.artists
  }
}

/* get artist details using the id another action 
* generator to start fetching artist info action.
* One artist, non plural, different info is passed
* the second fetch is for artist info, which is additional
* not available directly in the first API call
*/
export const START_FETCH_ARTIST_INFO = 'START_FETCH_ARTIST_INFO'
export const startFetchArtistInfo = (artistId) => {
  return dispatch => {
    dispatch( fetchArtistInfo(artistId) )
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
export const FETCH_ARTIST_INFO ='FETCH_ARTIST_INFO'
export const fetchArtistInfo = () => {
  return {
    type: FETCH_ARTIST_INFO
  }
}
