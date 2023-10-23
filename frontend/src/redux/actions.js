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

export const fetchGalleryInpos = async (dispatch) => {
    const response = await axios.get('/api/inspos');
    dispatch({
        type: 'FETCH_GALLERY_INSPOS',
        value: response.data
    });
};

export const fetchFeaturedInpos = async (dispatch) => {
    const response = await axios.get(`/api/inspos?keyword=featured`);
    dispatch({
        type: 'FETCH_FEATURED_INSPOS',
        value: response.data
    });
};

export const createInspo = async (dispatch, formEl) => {
    console.log('in action - begin create inspo api call');
    const response = await axios.post(`/api/inspos`, new FormData(formEl));
    console.log('in action - end create inspo api call');

    dispatch({
        type: 'CREATE_INSPO',
        value: response.data
    });

    return response;
};
