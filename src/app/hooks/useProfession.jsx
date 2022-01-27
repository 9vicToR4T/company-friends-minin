import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import professionService from "../services/profession.service";
import PropTypes from "prop-types";

const ProfessionContext = React.createContext();

export const useProfession = () => {
    return useContext(ProfessionContext);
};

export const ProfessionProvider = ({ children }) => {
    const [professions, setProfessions] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProfessionsList();
    }, []);
    async function getProfessionsList() {
        try {
            const { content } = await professionService.get();
            setProfessions(content);
            setLoading(false);
            return content;
        } catch (error) {
            errorCatcher(error);
        }
    }

    function getProfession(id) {
        return professions.find((p) => p._id === id);
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
        <ProfessionContext.Provider
            value={{ professions, isLoading, getProfession }}
        >
            {children}
        </ProfessionContext.Provider>
    );
};

ProfessionProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
