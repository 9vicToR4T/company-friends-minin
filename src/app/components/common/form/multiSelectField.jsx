import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const MultiSelectField = ({ label, options, name, onChange }) => {
    const handleChange = (value) => {
        onChange({ name: name, value: value });
    };
    const isArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((professionName) => ({
                  label: options[professionName].name,
                  value: options[professionName]._id
              }))
			: options;

    return (
        <div className="mt-4">
            <label className="form-label me-2 pe-auto">{label} </label>
            <div>
                <Select
                    isMulti
                    closeMenuOnSelect={false}
                    onChange={handleChange}
                    name={name}
                    options={isArray}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>
        </div>
    );
};
MultiSelectField.propTypes = {
    label: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    name: PropTypes.string,
    onChange: PropTypes.func
};

export default MultiSelectField;
