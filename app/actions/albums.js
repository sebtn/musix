import spotifyApi from './spoty'

export const START_FETCH_ARTIST_ALBUMS = 'START_FETCH_ARTIST_ALBUMS'
export const startFetchArtistAlbums = id => dispatch => {
    dispatch( fetchArtistAlbums(id) )
    return spotifyApi.getArtistAlbums(id, {limit: 20})
      .then(json => dispatch( receiveArtistAlbums(json) ))
      .catch(err => console.log(err))
}

/* Single Artist, receive info for one (not plural) */
export const RECEIVE_ARTIST_ALBUMS = 'RECEIVE_ARTIST_ALBUMS'
const receiveArtistAlbums = (json) => {
  return {
    type: RECEIVE_ARTIST_ALBUMS,
    albums: json.items
  }
}

/* Single Artist, request info for one (not plural) */
export const FETCH_ARTIST_ALBUMS='FETCH_ARTIST_ALBUMS'
export const fetchArtistAlbums = () => {
  return {
    type: FETCH_ARTIST_ALBUMS
  }
}
