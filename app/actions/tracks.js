import spotifyApi from './spoty'

export const START_FETCH_ALBUM_TRACKS = 'START_FETCH_ALBUM_TRACKS'
export const startFetchAlbumTracks = id => dispatch => {
    dispatch( fetchAlbumTracks(id) )
    return spotifyApi.getArtistAlbums(id, {limit: 20})
      .then(data => Promise.all( data.items.map( a => spotifyApi.getAlbumTracks(a.id) ) ))
      .then(data => data.map(json => dispatch( receiveAlbumTracks(json) ) ) )
      .catch(err => console.log(err))
}

export const RECEIVE_ALBUM_TRACKS = 'RECEIVE_ALBUM_TRACKS'
const receiveAlbumTracks = (json) => {
  return {
    type: RECEIVE_ALBUM_TRACKS,
    tracks: json.items
  }
}

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM'
const receiveAlbum = (data) => {
  return {
    type: RECEIVE_ALBUM,
    album: data.items
  }
}


export const FETCH_ALBUM_TRACKS = 'FETCH_ALBUM_TRACKS'
export const fetchAlbumTracks = () => {
  return {
    type: FETCH_ALBUM_TRACKS
  }
}