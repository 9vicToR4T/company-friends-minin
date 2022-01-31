import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import qualitiesService from "../services/qualities.service";
import { toast } from "react-toastify";

const QualtiesContext = createContext();

export const useQualities = () => {
    return useContext(QualtiesContext);
};

export const QualitiesProvider = ({ children }) => {
    const [qualitiesList, setQualitiesList] = useState([]);
    const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);

    useEffect(() => {
        getQualitiesList();
    }, []);
    async function getQualitiesList() {
        try {
            const { content } = await qualitiesService.get();
            setQualitiesList(content);
            setLoading(false);
            return content;
        } catch (error) {
            errorCatcher(error);
        }
    }

    function getQuality(id) {
        return qualitiesList.find((el) => el._id === id);
    }

    function errorCatcher(error) {
        const { message } = error.result.data;
        setError(message);
    }
    useEffect(() => {
        if (error !== null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);

    return (
        <QualtiesContext.Provider
            value={{ getQuality, isLoading, qualitiesList }}
        >
            {children}
        </QualtiesContext.Provider>
    );
};

QualitiesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
