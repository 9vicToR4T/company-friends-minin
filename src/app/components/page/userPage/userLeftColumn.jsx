import React from "react";
import PropTypes from "prop-types";
import { useRouteMatch, Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import Qualities from "../../ui/qualities/qualities";
import { useProfession } from "../../../hooks/useProfession";

const UserLeftColumn = ({ user }) => {
    const match = useRouteMatch();
    const { currentUser } = useAuth();
    const { getProfession, isLoading } = useProfession();
    const id = user.profession;
    const userProfession = getProfession(id);
    return (
        <div className="col-md-4 mb-3">
            <div className="card mb-3">
                <div className="card-body">
                    {currentUser._id === user._id && (
                        <Link to={`${match.url}/edit`}>
                            <button
                                className="
                                    position-absolute
                                    top-0
                                    end-0
									btn btn-light btn-sm
                                "
                            >
                                <i className="bi bi-gear"></i>
                            </button>
                        </Link>
                    )}

                    <div
                        className="
                                    d-flex
                                    flex-column
                                    align-items-center
                                    text-center
                                    position-relative
                                "
                    >
                        <img
                            src={user.image}
                            className="rounded-circle"
                            width="150"
                        />
                        <div className="mt-3">
                            <h4>{user.name}</h4>
                            <p className="text-secondary mb-1">
                                {!isLoading && userProfession.name}
                            </p>
                            <div className="text-muted">
                                <i
                                    className="
                                                bi bi-caret-down-fill
                                                text-primary
                                            "
                                    role="button"
                                ></i>
                                <i
                                    className="
                                                bi bi-caret-up
                                                text-secondary
                                            "
                                    role="button"
                                ></i>
                                <span className="ms-2">{user.rate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div
                    className="
                                card-body
                                d-flex
                                flex-column
                                justify-content-center
                                text-center
                            "
                >
                    <h5 className="card-title">
                        <span>Qualities</span>
                    </h5>
                    <p className="card-text">
                        {user.qualities.map((qualId) => (
                            <Qualities key={qualId} id={qualId} />
                        ))}
                    </p>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card mb-3">
                    <div
                        className="
                                    card-body
                                    d-flex
                                    flex-column
                                    justify-content-center
                                    text-center
                                "
                    >
                        <h5 className="card-title">
                            <span>Completed meetings</span>
                        </h5>

                        <h1 className="display-1">{user.completedMeetings}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLeftColumn;

UserLeftColumn.propTypes = {
    user: PropTypes.object
};
