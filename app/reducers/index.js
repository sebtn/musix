import {combineReducers} from 'redux'

import authReducer from './authReducer'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  auth: authReducer
})

export default rootReducer