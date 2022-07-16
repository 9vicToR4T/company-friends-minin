import React from "react";
import PropTypes from "prop-types";

const Counter = ({ name, label, value, onChange, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="mb-4">
            <label htmlFor={name}> {label}</label>
            <div className="input-group has-validation">
                <input
                    size={value.toString().length}
                    // type={showPassword ? "text" : type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    // className={getInputClasses()}
                />
                {error && <div className="invalid-feedback ">{error}</div>}
            </div>
        </div>
    );
};
Counter.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default Counter;
