/**
 * A file with functions that determine how to serve the state.
 * These functions will operate on the data in state.js
 */
import { combineReducers } from 'redux'

const user = (state = null, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

const inspos = (state = {}, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default combineReducers({ user, inspos });