import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData } from "../../store/users";
const NavProfile = () => {
    const currentUser = useSelector(getCurrentUserData());
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };

    if (!currentUser) return "loading";
    return (
        <div
            className="dropdown nav-nav"
            style={{ color: "#FFF" }}
            onClick={toggleMenu}
        >
            <div
                className="btn dropdown-toggle d-flex align-items-center"
                style={{ backgroundColor: "var(--bs-blue)" }}
            >
                <div className="me-2 nav-nav text-white">
                    {currentUser.name}
                </div>
                <img
                    src={currentUser.image}
                    alt=""
                    height="40"
                    className="img-responsive rounded-circle"
                />
            </div>
            <div
                className={
                    "w-100 dropdown-menu text-center" + (isOpen ? " show" : "")
                }
            >
                <Link
                    to={`/users/${currentUser._id}`}
                    className="dropdown-item"
                >
                    Profile
                </Link>
                <Link to="/logout" className="dropdown-item">
                    Log Out
                </Link>
            </div>
        </div>
    );
};

export default NavProfile;
