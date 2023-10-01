/**
 * A file with functions that determine how to serve the state.
 * These functions will operate on the data in state.js
 */
import { combineReducers } from 'redux';
import Cookies from 'js-cookie';

const user = (state = null, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      const {username, password} = action.value;
      Cookies.set('username', username);
      return {username: username};
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
