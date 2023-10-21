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

export const fetchGalleryInpos = (dispatch) => {
    fetch('/api/inspos')
        .then((response) => response.json())
        .then((data) => {
            dispatch({
                type: 'FETCH_GALLERY_INSPOS',
                value: data
            });
        });
};

export const fetchFeaturedInpos = (dispatch) => {
    fetch(`/api/inspos?keyword=featured`)
        .then((response) => response.json())
        .then((data) => {
            dispatch({
                type: 'FETCH_FEATURED_INSPOS',
                value: data
            });
        });
};
