import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import TextForm from "../common/form/textForm";
import api from "../../API";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        radio: 'male'
    });
    console.log(data);
    const [errors, setErrors] = useState({});
    const [professions, setProfessions] = useState({});
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);
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
        },
        profession: {
            isRequired: {
                message: "Choose your profession"
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
            <SelectField
                label="Profession"
                name="profession"
                valueSelect={data.profession}
                defaultOption="Choose your profession..."
                onChangeSelect={handleChange}
                data={professions}
                error={errors["profession"]}
            />
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Others", value: "others" }
                ]}
                label='Sex:'
                name='radio'
                value={data.radio}
                onChange={handleChange}
            />
            <button
                type="submit"
                className="btn btn-primary w-100 ma-0 mt-3"
                disabled={!isValid}
            >
                Send Form
            </button>
        </form>
    );
};

export default RegisterForm;
