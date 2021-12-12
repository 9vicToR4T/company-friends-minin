import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ onChangeUser }) => {
    return (
        <form>
            <label htmlFor="searchInput"></label>
            <div className="input-group has-validation mb-3">
                <input
                    type="text"
                    id="searchInput"
                    className="w-50"
                    autoComplete="off"
                    onChange={onChangeUser}
                />
                <button type="button" className="btn btn-primary">
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </form>
    );
};
SearchForm.propTypes = {
    onChangeUser: PropTypes.func
};
export default SearchForm;
