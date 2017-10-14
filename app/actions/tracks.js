import spotifyApi from './spoty'

export const START_FETCH_ALBUM_TRACKS = 'START_FETCH_ALBUM_TRACKS'
export const startFetchAlbumTracks = id => dispatch => {
    dispatch( fetchAlbumTracks(id) )
    return spotifyApi.getAlbumTracks(id, {limit: 50})
      .then(json => dispatch( receiveAlbumTracks(json) )) 
      .catch(err => console.log(err))
}

export const RECEIVE_ALBUM_TRACKS = 'RECEIVE_ALBUM_TRACKS'
const receiveAlbumTracks = (json) => {
  return {
    type: RECEIVE_ALBUM_TRACKS,
    tracks: json.items
  }
}

export const FETCH_ALBUM_TRACKS = 'FETCH_ALBUM_TRACKS'
export const fetchAlbumTracks = () => {
  return {
    type: FETCH_ALBUM_TRACKS
  }
}

export const START_FETCH_ALBUM_DETAILS = 'START_FETCH_ALBUM_DETAILS'
export const startFetchAlbumDetails = id => dispatch => {
  dispatch( fetchAlbumDetails(id) )
  return spotifyApi.getAlbum(id)
    .then(json => dispatch( receiveAlbumDetails(json) ))
    .catch(err => console.log(err))
}


export const RECEIVE_ALBUM_DETAILS = 'RECEIVE_ALBUM_DETAILS'
const receiveAlbumDetails = (json) => {
  return {
    type: RECEIVE_ALBUM_DETAILS,
    details: json
  }
}

export const FETCH_ALBUM_DETAILS = 'FETCH_ALBUM_DETAILS'
export const fetchAlbumDetails = () => {
  return {
    type: FETCH_ALBUM_DETAILS
  }
}