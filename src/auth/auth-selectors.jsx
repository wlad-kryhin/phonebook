const getIsLoggedIn = (state) => {
  return state.auth.token ? true : false;
};
const getUserName = (state) => state.auth.user.name;

export { getIsLoggedIn, getUserName };
