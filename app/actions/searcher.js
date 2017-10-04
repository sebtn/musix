import spotifyApi from './spoty'

export const SET_INPUT_TEXT = 'SET_INPUT_TEXT'
export const setSearchText = (artistName) => {
  return {
    type: SET_INPUT_TEXT,
    value: artistName
  }
} 