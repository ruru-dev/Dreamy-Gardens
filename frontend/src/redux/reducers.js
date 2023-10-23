/**
 * A file with functions that determine how to serve the state.
 * These functions will operate on the data in state.js
 */
import { combineReducers } from 'redux';
import Cookies from 'js-cookie';

const user = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            const { username, password } = action.value;
            Cookies.set('username', username);
            return username;
        case 'LOGOUT_USER':
            Cookies.remove('username');
            return null;
        default:
            return state;
    }
};

const inspos = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_GALLERY_INSPOS':
            return { ...state, gallery: action.value };
        case 'FETCH_FEATURED_INSPOS':
            return { ...state, featured: action.value };
        case 'CREATE_INSPO':
            console.log('in reducer - received CREATE_INSPO')
            return state;
        default:
            return state;
    }
};

export default combineReducers({ user, inspos });
