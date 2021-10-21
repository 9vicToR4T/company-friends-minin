import PropTypes from "prop-types";
import React from 'react';

const SearchStatus = ({ length }) => {
    return !length
        ? (
            <div className="m-3 badge bg-danger">
                No one will go with you to the party
            </div>
        )
        : (
            <div className="m-3 badge bg-primary">
                {length} people will go to the party with you
            </div>
        );
};
SearchStatus.propTypes = {
    length: PropTypes.number
};

export default SearchStatus;
