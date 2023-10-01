export const loginUser = (credentials) => {
  return {
    type: 'LOGIN_USER',
    value: credentials
  }
};
