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
export const startFetchArtists = artistName => dispatch =>  {
    dispatch( fetchArtists(artistName) )
    return spotifyApi.searchArtists(artistName, {limit: 8})
    .then( json => dispatch( receiveArtists(json)) )
    .catch( err => console.log(err) )
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
