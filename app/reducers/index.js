import {combineReducers} from 'redux'

import authReducer from './authReducer'
import {fetchArtistReducer} from './fetchArtistReducer'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  auth: authReducer,
  // artist: fetchArtistReducer
})

export default rootReducer