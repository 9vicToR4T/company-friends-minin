import React from "react";
import PropTypes from "prop-types";

const RadioField = ({ options, label, name, value, onChange }) => {
    return (
        <div className="mt-4">
            <label className="form-label me-2 pe-auto">{label} </label>
            {options.map((option) => {
                return (
                    <div
                        key={option.value + "-" + option.name}
                        className="form-check form-check-inline"
                    >
                        <input
                            checked={option.value === value}
                            className="form-check-input"
                            type="radio"
                            name={name}
                            id={option.value + "-" + option.name}
                            value={option.value}
                            onChange={onChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={option.value + "-" + option.name}
                        >
                            {option.name}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};
RadioField.propTypes = {
    options: PropTypes.array,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};
export default RadioField;
