import React from "react";
import PropTypes from "prop-types";
import Qualities from "./qualities";
import { useQualities } from "../../../hooks/useQualities";

const QualitiesList = ({ qualities }) => {
    const { isLoading, qualitiesList } = useQualities();
    const filter = qualities.map((id) => {
        const qualObj = qualitiesList.find((el) => el._id === id);
        return qualObj;
    });

    const showQualities = (array) => {
        return array.map((qual) => (
            <Qualities
                key={qual["_id"]}
                id={qual["_id"]}
                name={qual["name"]}
                color={qual["color"]}
            />
        ));
    };
    return <>{!isLoading ? showQualities(filter) : "loading.. "}</>;
};
QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
};
export default QualitiesList;
