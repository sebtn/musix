import {combineReducers} from 'redux'

import formReducer from './formReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  form: formReducer,
  user: userReducer
})

export default rootReducer