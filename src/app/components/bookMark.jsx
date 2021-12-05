import React from "react";
import PropTypes from "prop-types";
const BookMark = ({ status, onChangeBookMark }) => {
    return (
        <button onClick={onChangeBookMark}>
            {status
                ? (
                    <i className="bi bi-bookmark-fill"></i>
                )
                : (
                    <i className="bi bi-bookmark"></i>
                )}
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool,
    onChangeBookMark: PropTypes.func
};

export default BookMark;
