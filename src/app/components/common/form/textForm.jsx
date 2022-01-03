import React from "react";
import PropTypes from "prop-types";

const TextForm = ({ label, name, type, value, error, onChange }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    const handleaInputClasses = () => {
        return "form-control " + `${error ? "is-invalid" : ""}`;
    };
      const handleChange = (e) => {
          onChange({ name: name, value: e.target.value });
      };
    return (
        <div className="d-flex flex-column input-group has-validation mt-4">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    className={handleaInputClasses()}
                    type={showPassword ? "text" : type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                />
                {type === "password" && (
                    <button
                        className="btn btn-danger"
                        type="button"
                        onClick={handleShowPassword}
                    >
                        <i
                            className={
                                "bi bi-eye" + (showPassword ? "-slash" : "")
                            }
                        ></i>
                    </button>
                )}
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

TextForm.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextForm;
