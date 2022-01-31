import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import userService from "../services/user.service";
import { useState } from "react/cjs/react.development";
import { toast } from "react-toastify";
import { setTokens } from "../services/localStorage.service";

const httpAuth = axios.create();
const httpLoIn = axios.create();
const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [error, setError] = useState(null);

    async function signUp({ email, password, ...rest }) {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`;

        try {
            const { data } = await httpAuth.post(url, {
                email,
                password,
                returnSecureToken: true
            });

            setTokens(data);
            await createUser({ _id: data.localId, email, ...rest });
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
        const key = "AIzaSyBX8R3ldm67ItI4O3qc3QpjnNCu_5qOhmM";
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
        try {
            const { data } = await httpLoIn.post(url, {
                email,
                password,
                returnSecureToken: true
            });
            setTokens(data);
            console.log(data, "data in login");
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

    useEffect(() => {
        toast.error(error);
        setError(null);
    }, [error]);

    return (
        <AuthContext.Provider value={{ logIn, signUp, currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
