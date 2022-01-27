import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import userService from "../services/user.service";
import { toast } from "react-toastify";

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getUsers();
    }, []);

    async function getUsers() {
        try {
            const { content } = await userService.get();
            setUsers(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }
    function errorCatcher(error) {
        console.log(error);
        const { message } = error.response.data;
        setError(message);
        setLoading(false);
    }
    useEffect(() => {
        if (error !== null) toast.error(error);
        setError(null);
    }, [error]);
    return (
        <UserContext.Provider value={{ users }}>
            {!isLoading ? children : <h2>Loading users ...</h2>}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf([PropTypes.node]),
        PropTypes.node
    ])
};