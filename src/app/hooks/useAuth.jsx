import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import userService from "../services/user.service";
import { toast } from "react-toastify";
import localStorageService, {
    setTokens
} from "../services/localStorage.service";
import { useHistory } from "react-router-dom";

export const httpAuth = axios.create({
    baseURL: "https://identitytoolkit.googleapis.com/v1/",
    params: {
        key: process.env.REACT_APP_FIREBASE_KEY
    }
});
const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const history = useHistory();
    console.log(currentUser);
    function getRoundNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    async function signUp({ email, password, ...rest }) {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`;

        try {
            const { data } = await httpAuth.post(url, {
                email,
                password,
                returnSecureToken: true
            });

            setTokens(data);
            await createUser({
                _id: data.localId,
                email,
                completedMeetings: getRoundNumber(0, 200),
                rate: getRoundNumber(1, 5),
                image: `https://avatars.dicebear.com/api/avataaars/${(
                    Math.random() + 1
                )
                    .toString(36)
                    .substring(7)}.svg`,
                ...rest
            });
        } catch (error) {
            errorCatcher(error);
            const { message } = error.response.data.error;
            if (message === "EMAIL_EXISTS") {
                const errorObj = { email: "This email address was used" };
                throw errorObj;
            }
        }
    }

    async function logIn({ email, password }) {
        const url = `accounts:signInWithPassword`;
        try {
            const { data } = await httpAuth.post(url, {
                email,
                password,
                returnSecureToken: true
            });
            setTokens(data);

            await getUserData();
        } catch (error) {
            const { message } = error.response.data.error;
            if (message === "EMAIL_NOT_FOUND") {
                const errorObj = { email: "This email address it's wrong" };
                throw errorObj;
            }
            if (message === "INVALID_PASSWORD") {
                const errorObj = { password: "This password it's wrong" };
                throw errorObj;
            }
        }
    }

    async function createUser(data) {
        try {
            const { content } = await userService.create(data);
            setCurrentUser(content);
        } catch (error) {
            errorCatcher(error);
        }
    }

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }

    async function getUserData() {
        try {
            const { content } = await userService.getCurrentUser();
            setCurrentUser(content);
        } catch (error) {
            errorCatcher(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (localStorageService.getAccessToken()) {
            getUserData();
        } else {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        toast.error(error);
        setError(null);
    }, [error]);

    function logOut() {
        localStorageService.removeAuthData();
        setCurrentUser(null);
        history.push("/");
    }

    async function updateUserInfo(userData) {
        try {
            const { content } = await userService.updateUserData(userData);
            return content;
        } catch (error) {
            errorCatcher(error);
        }
    }

    return (
        <AuthContext.Provider
            value={{ logIn, signUp, currentUser, logOut, updateUserInfo }}
        >
            {!isLoading ? children : "Loading user data ..."}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
