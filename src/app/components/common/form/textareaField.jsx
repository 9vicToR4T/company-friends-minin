import React from "react";
import PropTypes from "prop-types";

const TextAreaField = ({ label, name, value, onChange }) => {
    const handleChange = (e) => {
        onChange({ name: name, value: e.target.value });
    };
    return (
        <>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                {label}
            </label>
            <textarea
                className="form-control"
                value={value}
                name={name}
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={handleChange}
            ></textarea>
        </>
    );
};

export default TextAreaField;

TextAreaField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};
