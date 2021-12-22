import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import TextForm from "../common/form/textForm";

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    useEffect(() => {
        validate();
    }, [data]);

    const handleChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    const validateConfig = {
        email: {
            isRequired: {
                message: "Write your email"
            },
            isEmail: {
                message: "Email is wrong"
            }
        },
        password: {
            isRequired: {
                message: "Write your password"
            },
            isCapitalLetter: {
                message: "Must have a capital letter"
            },
            num: {
                message: "Must have a number"
            },
            passwordLength: {
                message: "Minimum 8 caracters",
                value: 8
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validateConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmitForm = (e) => {
        e.preventDefault();
        // const isValid = validate();
        // if (!isValid) {
        //     return;
        // }
    };
    return (
        <form onSubmit={handleSubmitForm}>
            <TextForm
                label="Email"
                name="email"
                type="text"
                value={data.value}
                error={errors["email"]}
                onChange={handleChange}
            />
            <TextForm
                label="Password"
                name="password"
                type="password"
                value={data.value}
                error={errors["password"]}
                onChange={handleChange}
            />
            {/* <div className="mt-4">
                <label htmlFor="validationCustom04" className="form-label">
                    Profession:
                </label>
                <select
                    className="form-select"
                    id="validationCustom04"
                    name="professions"
                    value={data.profession}
                    onChange={handleChange}
                >
                    <option selected={data.profession === ""} disabled value="">
                        Choose...
                    </option>
                    {professions &&
                        Object.keys(professions).map((professionName) => (
                            <option
                                key={professions[professionName]._id}
                                value={professions[professionName].name}
                            >
                                {professions[professionName].name}
                            </option>
                        ))}
                </select>
            </div> */}
            <div>
                <button
                    type="submit"
                    className="btn btn-primary w-100 ma-0 mt-3"
                    disabled={!isValid}
                >
                    Send Form
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
