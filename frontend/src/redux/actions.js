import axios from 'axios';

export const loginUser = (credentials) => {
    return {
        type: 'LOGIN_USER',
        value: credentials
    };
};

export const logoutUser = () => {
    return {
        type: 'LOGOUT_USER',
        value: null
    };
};

const backendUrl = process.env.REACT_APP_BACKEND_URL || '';

export const fetchGalleryInpos = async (dispatch) => {
    const response = await axios.get(`${backendUrl}/api/inspos`);
    dispatch({
        type: 'FETCH_GALLERY_INSPOS',
        value: response.data
    });
};

export const fetchFeaturedInpos = async (dispatch) => {
    const response = await axios.get(`${backendUrl}/api/inspos?keyword=featured`);
    dispatch({
        type: 'FETCH_FEATURED_INSPOS',
        value: response.data
    });
};

export const createInspo = async (dispatch, formEl) => {
    console.log('in action - begin create inspo api call');
    let response;
    try {
        response = await axios.post(`${backendUrl}/api/inspos`, new FormData(formEl));
        dispatch({
            type: 'CREATE_INSPO',
            value: response.data
        });
    } catch(error) {
        response = error.response;
    }    
    console.log('in action - end create inspo api call');

    return response;
};
