import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import TextForm from "../components/textForm";
import { validator } from "../utils/validator";
const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        validate();
    }, [data]);

    const handleData = (e) => {
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
        const isValid = validate();
        if (!isValid) {
            return;
        }
        console.log(data, "data");
    };
    return (
        <div className="container ">
            <div className="row justify-content-center">
                <div className="col-md-6 offset-md-3 shadow mt-5 p-4">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmitForm}>
                        <TextForm
                            label="Email"
                            name="email"
                            type="text"
                            value={data.value}
                            error={errors["email"]}
                            onChange={handleData}
                        />
                        <TextForm
                            label="Password"
                            name="password"
                            type="password"
                            value={data.value}
                            error={errors["password"]}
                            onChange={handleData}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary w-100 ma-0 mt-3"
                            disabled={!isValid}
                        >
                            Send Form
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
