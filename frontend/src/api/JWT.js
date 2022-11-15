export const getToken = () => {
  return window.sessionStorage.getItem("Token");
};

export const getUserId = () => {
  return window.localStorage.getItem("userId");
};

export const deleteToken = () => {
  window.sessionStorage.removeItem("Token");
};
