import { PropTypes } from "prop-types";
import React from "react";
import { useQualities } from "../../../hooks/useQualities";

const Qualities = ({ id }) => {
    const { getQuality } = useQualities();
    const q = getQuality(id);
    return (
        <span className={"badge m-1 bg-" + q.color} key={q._id}>
            {q.name}
        </span>
    );
};
Qualities.propTypes = {
    id: PropTypes.string
};
export default Qualities;
