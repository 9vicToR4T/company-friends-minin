import { PropTypes } from "prop-types";
import React from 'react';

const Btn = ({ id }) => {
    return (
        <button data-id={id} className="badge btn btn-danger">
            delete
        </button>
    );
};

Btn.propTypes = {
    id: PropTypes.string
};
export default Btn;
