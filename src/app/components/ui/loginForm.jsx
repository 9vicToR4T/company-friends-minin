import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import CheckBoxField from "../common/form/checkBoxField";
import TextForm from "../common/form/textForm";

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    console.log(data, 'login data');

    const [errors, setErrors] = useState({});

    useEffect(() => {
        validate();
    }, [data]);

    const handleChange = (objectTarget) => {
        setData((prevState) => ({
            ...prevState,
            [objectTarget.name]: objectTarget.value
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
            <CheckBoxField name='stayOn' value={data.stayOn} onChange={handleChange} > Save my password!</CheckBoxField>
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
