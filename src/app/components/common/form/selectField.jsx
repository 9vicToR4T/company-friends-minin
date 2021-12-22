import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
    label,
    name,
    valueSelect,
    defaultOption,
    onChangeSelect,
    data,
    error
}) => {
    const isArray =
        !Array.isArray(data) && typeof data === "object"
            ? Object.keys(data).map((professionName) => ({
                  name: data[professionName].name,
                  value: data[professionName]._id
              }))
            : data;

    const handleaSelectClasses = () => {
        return "form-select " + `${error ? "is-invalid" : ""}`;
    };

    return (
        <div className="mt-4">
            <label htmlFor="validationCustom04" className="form-label">
                {label} :
            </label>
            <select
                className={handleaSelectClasses()}
                id="validationCustom04"
                name={name}
                value={valueSelect}
                onChange={onChangeSelect}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {isArray.map((obj) => (
                    <option
                        key={obj.value}
                        value={obj.name}
                    >
                        {obj.name}
                    </option>
                ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    defaultOption: PropTypes.string,
    valueSelect: PropTypes.string,
    onChangeSelect: PropTypes.func,
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    error: PropTypes.string
};

export default SelectField;