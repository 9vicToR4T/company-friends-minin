import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import { validateConfig } from '../../utils/validateConfig';
import TextForm from "../common/form/textForm";
import api from "../../API";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        radio: "male",
        qualities: [],
        licence: false
    });

    const [errors, setErrors] = useState({});
    const [professions, setProfessions] = useState({});
    const [qualities, setQualities] = useState({});

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    useEffect(() => {
        validate();
    }, [data]);

    const handleChange = (objectTarget) => {
        // initial foloseam event, insa pentru a lucra si cu masive am creat in fiecare component inca un nivel de abstractie(handleChange), care acolo prelucreaza datele si ofera aici obiectul gata
            setData((prevState) => ({
                ...prevState,
                [objectTarget.name]: objectTarget.value
            }));
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
                label="Sex:"
                name="radio"
                value={data.radio}
                onChange={handleChange}
            />
            <MultiSelectField
            defaultValue={data.qualities}
                label="Select your qualities"
                onChange={handleChange}
                options={qualities}
                name="qualities"
            />
            <CheckBoxField name="licence" value={data.licence} onChange={handleChange} error={errors.licence}>Accept licence rights!</CheckBoxField>
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
