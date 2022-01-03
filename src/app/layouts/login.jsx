import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
    const { registerParam } = useParams();
    const [formType, setFormType] = useState(
        registerParam === "register" ? "register" : "login"
    );
    const handleFormType = () => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };

    return (
        <div className="container ">
            <div className="row justify-content-center">
                <div className="col-md-6 shadow mt-5 p-4">
                    {formType === "register"
                    ? (
                        <>
                            <h2>Register</h2>
                            <RegisterForm />
                            <div className="mt-3">
                                Have an account?{" "}
                                <a role="button" onClick={handleFormType}>
                                    Login
                                </a>
                                {/* <Link to="/login" onClick={handleFormType}>
                                    Login
                                </Link> */}
                            </div>
                        </>
                    )
                    : (
                        <>
                            <h2>Login</h2>
                            <LoginForm />
                            <div className="mt-3">
                                Do not have an account?{" "}
                                <a role="button" onClick={handleFormType}>
                                    Register
                                </a>
                                {/* <Link
                                    to="/login/register"
                                    onClick={handleFormType}
                                >
                                    Register
                                </Link> */}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
