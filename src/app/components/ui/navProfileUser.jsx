import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useAuth } from "../../hooks/useAuth";

const NavProfileUser = () => {
    const { currentUser } = useAuth();
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    return (
        <div className="dropdown" onClick={toggleMenu}>
            <div className="btn dropdown-toggle d-flex align-items-center">
                <div className="me-2">{currentUser.name}</div>
                <img
                    src={currentUser.image}
                    alt=""
                    className="image-responsive rounded-circle"
                    height="40"
                />
            </div>
            <div className={"dropdown-menu w-100" + (isOpen ? " show" : "")}>
                <Link to={`/users/${currentUser._id}`} className="dropdown-item">
                    {" "}
                    Profile
                </Link>
                <Link to={"/logout"} className="dropdown-item">
                    Log Out
                </Link>
            </div>
        </div>
    );
};

export default NavProfileUser;
