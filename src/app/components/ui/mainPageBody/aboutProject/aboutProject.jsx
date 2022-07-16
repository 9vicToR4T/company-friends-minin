import React from "react";
import people from "../../../../images/people.jpeg";
import party from "../../../../images/party.jpg";
import "./aboutProject.css";

const AboutProject = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 m-3">
                    <div className="content">
                        <div className="img-container">
                            <img
                                className="people-img"
                                src={people}
                                alt="people"
                            />
                        </div>
                        <div className="description">
                            <h3>Stay togeter, stay strong!</h3>
                            <p>
                                The application that allows you to stay in touch
                                with your friends.
                            </p>
                            <p>Make a plan, move on!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 about">
                    <p className="about-desc">
                        Friendship must be built on a solid foundation of
                        alcohol, sarcasm, inappropriateness and shenanigans
                        <i className="bi bi-emoji-smile-upside-down"></i>
                    </p>
                    <img className="party-img" src={party} alt="people" />
                </div>
                <div className="col-lg-6 about-rating">
                    <p>
                        Be careful not to forget any of your friends to invite
                        them to the party. Create your own list that will help
                        you!
                    </p>
                    <span className="about-rating-desc">
                        We are the best! BE WITH US
                    </span>
                    <ul className="rating-stars">
                        <li className="star">
                            <i className="bi bi-star-fill"></i>
                        </li>
                        <li className="star">
                            <i className="bi bi-star-fill"></i>
                        </li>
                        <li className="star">
                            <i className="bi bi-star-fill"></i>
                        </li>
                        <li className="star">
                            <i className="bi bi-star-fill"></i>
                        </li>
                        <li className="star">
                            <i className="bi bi-star-fill"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutProject;
