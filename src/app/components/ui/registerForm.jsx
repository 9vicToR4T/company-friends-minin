import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import { validateConfig } from "../../utils/validateConfig";
import TextForm from "../common/form/textForm";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";
import { useQualities } from "../../hooks/useQualities";
import { useProfession } from "../../hooks/useProfession";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

const RegisterForm = () => {
    const history = useHistory();
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        radio: "male",
        qualities: [],
        licence: false
    });
    const { signUp } = useAuth();
    const { professions } = useProfession();
    const newProfessionsArray = professions.map((p) => ({
        label: p.name,
        value: p._id
    }));
    const { qualitiesList } = useQualities();
    const newQualitiesArray = qualitiesList.map((q) => ({
        label: q.name,
        value: q._id
    }));
    const [errors, setErrors] = useState({});

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

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) {
            return;
        }
        const newData = {
            ...data,
            qualities: data.qualities.map((q) => q.value)
        };
        try {
            await signUp(newData);
            history.push("/");
        } catch (error) {
            setErrors(error);
        }
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
                data={newProfessionsArray}
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
                options={newQualitiesArray}
                name="qualities"
            />
            <CheckBoxField
                name="licence"
                value={data.licence}
                onChange={handleChange}
                error={errors.licence}
            >
                Accept licence rights!
            </CheckBoxField>
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
