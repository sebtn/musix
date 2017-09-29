import {combineReducers} from 'redux'

import formReducer from './formReducer'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  form: formReducer
})

export default rootReducer