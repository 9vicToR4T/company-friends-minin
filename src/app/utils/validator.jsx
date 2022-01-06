export function validator(data, config) {
    const errors = {};
    function validate(validateMethod, data, config) {
        let validateCase;
        switch (validateMethod) {
            case "isRequired": {
                if (typeof data === "boolean") {
                    validateCase = !data;
                } else {
                    validateCase = data === "";
                }
                break;
            }
            case "isEmail": {
                const emailRegExp = /^\S+@\S+\.\S+$/g;
                validateCase = !emailRegExp.test(data);
                break;
            }
            case "isCapitalLetter": {
                const capitalRegExp = /[A-Z]+/g;
                validateCase = !capitalRegExp.test(data);
                break;
            }
            case "num": {
                const isNumber = /\d+/g;
                validateCase = !isNumber.test(data);
                break;
            }
            case "passwordLength": {
                validateCase = data.length < config.value;
                break;
            }
        }
        if (validateCase) return config.message;
    }
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
}
