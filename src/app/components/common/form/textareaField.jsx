import React from "react";
import PropTypes from "prop-types";

const TextAreaField = ({ label, name, value, onChange, error }) => {
    const handleChange = (e) => {
        onChange({ name: name, value: e.target.value });
    };

    const setClassName = () => {
        return error ? `form-control is-invalid` : "form-control";
    };
    return (
        <>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                {label}
            </label>
            <textarea
                className={setClassName()}
                value={value}
                name={name}
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={handleChange}
            ></textarea>
            {error && <div className="invalid-feedback">{error}</div>}
        </>
    );
};

export default TextAreaField;

TextAreaField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};
