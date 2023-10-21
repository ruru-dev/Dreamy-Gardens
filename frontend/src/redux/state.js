import Cookies from 'js-cookie';

/**
 * The inital state of the application. It's just an object with data.
 * This is literally the data that will be tracked in the state.
 */
const state = {
    user: Cookies.get('username') || null,
    inspos: {
        featured: [],
        gallery: []
    }
};

export default state;
