import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../store/users";
import { getProfessionbyId } from "../../store/professions";

const UserCard = ({ user }) => {
    const history = useHistory();
    const profId = user?.profession;

    const currentUser = useSelector(getCurrentUserData());
    const getProf = useSelector(getProfessionbyId(profId));
    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };
    console.log(getProf);
    console.log(user);
    return (
        <div
            className="card mb-3 shadow "
            style={{
                boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                color: "var(--bs-blue)"
            }}
        >
            <div className="card-body">
                {currentUser._id === user._id && (
                    <button
                        className="position-absolute top-0 end-0 btn btn-light btn-sm"
                        onClick={handleClick}
                    >
                        <i className="bi bi-gear"></i>
                    </button>
                )}

                <div className="d-flex flex-column align-items-center text-center position-relative">
                    <img
                        src={user.image}
                        className="rounded-circle"
                        width="150"
                    />
                    <div className="mt-3">
                        <h4>{user.name}</h4>
                        <p className="text-secondary mb-1">
                            {getProf?.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
UserCard.propTypes = {
    user: PropTypes.object
};

export default UserCard;
