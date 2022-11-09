export const saveToken = (token) => {
  window.sessionStorage.setItem("Token", token);
};
export const saveRefreshToken = (token) => {
  window.sessionStorage.setItem("Token", token);
};
export const getToken = () => {
  // console.log("getTokeen    ", window.sessionStorage.getItem("Token"));
  return window.sessionStorage.getItem("Token");
};

export const getUserId = () => {
  return window.localStorage.getItem("userId");
}

export const getRefreshToken = () => {
  return window.sessionStorage.getItem("Token");
};
export const deleteToken = () => {
  window.sessionStorage.removeItem("Token");
};
export const deleteRefreshToken = () => {
  window.sessionStorage.removeItem("Token");
};
