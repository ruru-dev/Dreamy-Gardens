import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL || '';

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
    const response = await axios.get(`${backendUrl}/api/inspos`);
    dispatch({
        type: 'FETCH_GALLERY_INSPOS',
        value: response.data
    });
};

export const fetchFeaturedInpos = async (dispatch) => {
    const response = await axios.get(
        `${backendUrl}/api/inspos?keyword=featured`
    );
    dispatch({
        type: 'FETCH_FEATURED_INSPOS',
        value: response.data
    });
};

export const createInspo = async (dispatch, formEl, taggedPlants) => {
    const formData = new FormData(formEl);
    for (let plant of taggedPlants) {
        formData.append('tagged_plants', plant.id)
    }

    console.log('in action - begin create inspo api call');
    let response;
    try {
        response = await axios.post(`${backendUrl}/api/inspos`, formData);
        dispatch({
            type: 'CREATE_INSPO',
            value: response.data
        });
    } catch (error) {
        response = error.response;
    }
    console.log('in action - end create inspo api call');

    return response;
};

export const createUser = async (dispatch, formValues) => {
    console.log('in action - begin create user api call');
    let response;
    try {
        response = await axios.post(`${backendUrl}/api/users`, formValues);
        dispatch({
            type: 'CREATE_USER',
            value: response.data
        });
    } catch (error) {
        response = error.response;
    }
    console.log('in action - end create user api call');

    return response;
};

export const fetchPlants = async (dispatch) => {
    const response = await axios.get(`${backendUrl}/api/plants`);
    dispatch({
        type: 'FETCH_PLANTS',
        value: response.data
    });
};
