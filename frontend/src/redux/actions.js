export const loginUser = (credentials) => {
  return {
    type: 'LOGIN_USER',
    value: credentials
  }
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
    value: null
  }
};
