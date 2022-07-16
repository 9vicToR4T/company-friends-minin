import React from "react";
import "./meetingsAndRate.css";
import PropTypes from "prop-types";

const MeetingsCard = ({ user }) => {
    return (
        <div
            className="card mb-3"
            style={{
                boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                    color: "var(--bs-purple)"
            }}
        >
            <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">
                    <span>Completed meetings</span>
                </h5>
                <div className="meetings-container">
                    <span className="m-3">{user?.completedMeetings}</span>
                </div>
            </div>
            <div className="text-muted card-body rate-container">
                <div className="rate-title">Rating</div>
                <div>
                    <span className="m-4 rate">{user?.rate}</span>
                </div>
            </div>
        </div>
    );
};
MeetingsCard.propTypes = {
    user: PropTypes.object
};

export default MeetingsCard;
