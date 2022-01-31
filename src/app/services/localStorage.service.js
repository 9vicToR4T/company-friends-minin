const REFRESH_KEY = "jwt-refresh-token";
const TOKEN_KEY = "jwt-token";
const EXPIRES_KEY = "jwk-expires";

export function setTokens({ idToken, refreshToken, expiresIn = 3600 }) {
    const expiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(TOKEN_KEY, idToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(EXPIRES_KEY, expiresDate);
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

const localStorageService = {
    setTokens,
    getRefreshToken,
    getAccessToken,
    getExpiresDateToken
};
export default localStorageService;
