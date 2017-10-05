import {combineReducers} from 'redux'

import authReducer from './authReducer'
import artistsReducer from './artistsReducer'
import searcherReducer from './searcherReducer'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  auth: authReducer,
  artists: artistsReducer,
  inputs: searcherReducer
})

export default rootReducer