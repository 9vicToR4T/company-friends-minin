export const validateConfig = {
    name: {
        isRequired: {
            message: "Write name correct"
        }
    },
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
    },
    licence: {
        isRequired: {
            message: "For use our services, you must to accept licence's rules!"
        }
    }
};
