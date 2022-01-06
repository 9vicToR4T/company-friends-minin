import React, { useState, useEffect } from "react";
import api from "../../../API";
// import { validator } from "../../../utils/validator";
import Qualities from "../../ui/qualities/qualities";
import LoadingElement from "../../common/loadingComponent";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import EditUserDetails from "../editUserDetails/editUserDetails";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();

    userId &&
        useEffect(() => {
            api.users.getById(userId).then((userData) => setUser(userData));
        }, [user]);
        // AM SCHImbat aici din userId in user deoarece nu se face update la user cand schimbam datele

    const history = useHistory();
    const match = useRouteMatch();

    const handleChangePage = () => {
        history.push("/users");
    };

    const renderInfoUser = (user) => {
        return (
            <div className="d-flex justify-content-center text-center">
                <div>
                    <h2 className="m-3">{user.name}</h2>
                    <hr />
                    <div className="m-3">
                        Proffesion: {user.profession.name}
                    </div>
                    <div className="m-3">
                        Qualities:{" "}
                        {user.qualities.map((el, index) => (
                            <div key={el + index}>
                                <Qualities {...el} />
                            </div>
                        ))}
                    </div>
                    <div className="m-3">
                        Completed Meetings: {user.completedMeetings}
                    </div>
                    <div className="m-3">Rate: {user.rate}</div>
                    <div className="m-3">Sex: {user.sex}</div>
                    <div className="m-3">Email: {user.email}</div>
                    <div>
                        <button
                            className="btn btn-warning mt-3"
                            onClick={() => {
                                handleChangePage();
                            }}
                        >
                            To Users List
                        </button>
                    </div>
                    <div>
                        <Link
                            className="btn btn-dark mt-3"
                            to={`${match.url}/edit`}
                        >
                            Update
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
    if (user) {
        return (
            <>
                {history.location.pathname === `${match.url}/edit`
                ? (
                    <div>
                        <EditUserDetails user={user} />
                    </div>
                )
                : (
                    <div>
                        {user ? renderInfoUser(user) : <LoadingElement />}
                    </div>
                )}
            </>
        );
    } else {
        return <LoadingElement />;
    }
};
UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
// <Router>
//     <Switch>
//         <Route
//             path={`${match.path}/:edit`}
//             component={EditUserDetails}
//         />
//     </Switch>
// </Router>
