const REFRESH_KEY = "jwt-refresh-token";
const TOKEN_KEY = "jwt-token";
const EXPIRES_KEY = "jwk-expires";
const USERID_KEY = "user-id";

export function setTokens({
    idToken,
    refreshToken,
    localId,
    expiresIn = 3600
}) {
    const expiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(TOKEN_KEY, idToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(EXPIRES_KEY, expiresDate);
    localStorage.setItem(USERID_KEY, localId);
}

function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY);
}
function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
}
function getExpiresDateToken() {
    return localStorage.getItem(EXPIRES_KEY);
}
function removeAuthData() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(EXPIRES_KEY);
    localStorage.removeItem(USERID_KEY);
}
function getUserId() {
    return localStorage.getItem(USERID_KEY);
}

const localStorageService = {
    setTokens,
    getRefreshToken,
    getAccessToken,
    getExpiresDateToken,
    getUserId,
    removeAuthData
};
export default localStorageService;
