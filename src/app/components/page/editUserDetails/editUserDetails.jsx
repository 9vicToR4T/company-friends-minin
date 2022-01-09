import React, { useState, useEffect } from "react";
import { validator } from "../../../utils/validator";
import { validateConfig } from "../../../utils/validateConfig";
import api from "../../../API";
import PropTypes from "prop-types";
import TextForm from "../../common/form/textForm";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import { Link } from "react-router-dom";

const EditUserDetails = ({ user }) => {
    const [data, setData] = useState({
        name: user.name,
        email: user.email,
        profession: user.profession,
        radio: "male",
        qualities: user.qualities
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

    const validate = () => {
        const errors = validator(data, validateConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleChange = (objectTarget) => {
        if (objectTarget.name === "qualities") {
            const idArray = objectTarget.value.map((el) => el.value);
            const arrayOfKeys = idArray.map((id) => {
                const qualitieKey = Object.keys(qualities).find(
                    (ob) => qualities[ob]._id === id
                );
                return qualitieKey;
            });

            const arrayOfNativeQualities = arrayOfKeys.map((keyQual) => {
                let arr;
                Object.keys(qualities).forEach((el) => {
                    if (el === keyQual) {
                        arr = qualities[el];
                    }
                });
                return arr;
            });
            setData((prevState) => ({
                ...prevState,
                [objectTarget.name]: arrayOfNativeQualities
            }));
        } else {
            setData((prevState) => ({
                ...prevState,
                [objectTarget.name]: objectTarget.value
            }));
        }
    };

    const getIndexOfNewProfession = Object.keys(professions).findIndex(
        (ob) => professions[ob]["name"] === data.profession
    );

    const getProfession =
        professions[getIndexOfNewProfession] || user.profession;

    const updatedUser = {
        ...user,
        name: data.name,
        email: data.email,
        profession: getProfession,
        sex: data.radio,
        qualities: data.qualities
    };

    const handleUpdate = () => {
        api.users.update(user._id, updatedUser);
    };

    return (
        <div className="container shadow-lg p-3">
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
            <SelectField
                label="Profession"
                name="profession"
                valueSelect={data.profession["name"]}
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
            <Link
                to={`users/${user._id}`}
                className="btn btn-primary w-100 ma-0 mt-3"
                onClick={handleUpdate}
                disabled={!isValid}
            >
                Update
            </Link>
        </div>
    );
};

EditUserDetails.propTypes = {
    user: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    // onChange: PropTypes.func
    // professions: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default EditUserDetails;
