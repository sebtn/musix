import { List, Map, fromJS } from 'immutable'
import { SET_INPUT_TEXT } from '../actions/searcher'

/* Initial state 
* String corresponds to the value of the search 
* input
*/
const initialState = Map({ input: '' })

/* The state for the starting point for 
* the particular action. Use the following
* to get a new state, kind of like the spread
* operator works, accumulating the new value
* and setting it.
* merge: ''takes each entry of each collection 
* and sets it on this Map''.
*/
const setNewInput = (state, value) => {
  let newState = Map({
    input: value
  })
  return state.merge(newState)
} 

/* Main set input reducer, reducing state for a store action
* XOR other same state.
* The state for a particular reducer's starting point. 
* using an action's starting point state inside, and
* the type inside the action
*/
export default function artists(state=initialState, action) {
  switch(action.type) {
    case SET_INPUT_TEXT:
      return setNewInput(state, action.value)
    default:
      return state 
  }
} 