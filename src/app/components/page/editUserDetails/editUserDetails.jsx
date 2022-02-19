import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextForm from "../../common/form/textForm";
import { validateConfig } from "../../../utils/validateConfig";
import { validator } from "../../../utils/validator";
import { useProfession } from "../../../hooks/useProfession";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import { useQualities } from "../../../hooks/useQualities";
import MultiSelectField from "../../common/form/multiSelectField";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const EditUserDetails = ({ user }) => {
    const { updateUserInfo } = useAuth();
    const history = useHistory();
    const { professions, isLoading, getProfession } = useProfession();
    const {
        qualitiesList,
        isLoading: isLoadingQualities,
        getQuality
    } = useQualities();

    const [errors, setErrors] = useState({});

    const [data, setData] = useState({
        name: user.name,
        email: user.email,
        profession: user.profession,
        radio: "male",
        qualities: user.qualities,
        ...user
    });
    const changeProfessions = professions.map((ob) => ({
        label: ob.name,
        value: ob._id
    }));
    const getUserProfession = () => getProfession(data.profession);

    const newQualitiesArray = qualitiesList.map((q) => ({
        label: q.name,
        value: q._id
    }));

    const handleChange = (objectTarget) => {
        if (objectTarget.name === "qualities") {
            const getKeys = objectTarget.value.map((el) => el.value);
            setData((prevState) => ({ ...prevState, qualities: getKeys }));
            console.log(getKeys);
        } else {
            setData((prevState) => ({
                ...prevState,
                [objectTarget.name]: objectTarget.value
            }));
        }
    };

    const handleUpdate = async () => {
        try {
            await updateUserInfo(data);
            history.push(`users/${user._id}`);
        } catch (error) {

        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validateConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    return (
        <div className="container">
            <TextForm
                label="Name"
                name="name"
                type="text"
                value={data.name}
                onChange={handleChange}
                error={errors["name"]}
            />
            <TextForm
                label="Email"
                name="email"
                type="text"
                value={data.email}
                onChange={handleChange}
                error={errors["email"]}
            />
            {!isLoading && (
                <SelectField
                    label="Profession"
                    name="profession"
                    valueSelect={getUserProfession().name}
                    defaultOption="Choose your profession..."
                    onChangeSelect={handleChange}
                    data={changeProfessions}
                    error={errors["profession"]}
                />
            )}
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
            {!isLoadingQualities && (
                <MultiSelectField
                    defaultValue={data.qualities.map((qualId) =>
                        getQuality(qualId)
                    )}
                    label="Select your qualities"
                    onChange={handleChange}
                    options={newQualitiesArray}
                    name="qualities"
                />
            )}
            <button
                className="btn btn-primary w-100 ma-0 mt-3"
                onClick={handleUpdate}
                disabled={!isValid}
            >
                Update
            </button>
        </div>
    );
};

EditUserDetails.propTypes = {
    user: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
export default EditUserDetails;
