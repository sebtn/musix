import {combineReducers} from 'redux'

import authReducer from './authReducer'
import artistsReducer from './artistsReducer'
import searcherReducer from './searcherReducer'
import albumsReducer from './albumsReducer'


const rootReducer = combineReducers({
  // state: (state = {}) => state
  auth: authReducer,
  artists: artistsReducer,
  albums: albumsReducer,
  inputs: searcherReducer
})

export default rootReducer