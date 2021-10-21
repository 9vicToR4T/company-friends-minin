import { PropTypes } from "prop-types";
import React from 'react';

const Qualities = ({ id, color, name }) => {
    const clName = "badge me-2 bg-";
    return (
        <span key={id} className={clName + color}>
            {name}
        </span>
    );
};
Qualities.propTypes = {
    id: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string
};
export default Qualities;
