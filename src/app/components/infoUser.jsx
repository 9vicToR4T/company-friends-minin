import React from "react";
import api from "../API";
import PropTypes from "prop-types";
import Qualities from "./qualities";
import LoadingElement from "./loadingComponent";
import { useHistory } from "react-router-dom";

const InfoUser = ({ match }) => {
    const { userId } = match.params;
    const history = useHistory();
    const [user, setUser] = React.useState();
    userId &&
        React.useEffect(() => {
            api.users.getUserById(userId).then((data) => setUser(data));
        }, [userId]);

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
                        {user.qualities.map((el) => (
                            <div key={el._id}>
                                <Qualities {...el} />
                            </div>
                        ))}
                    </div>
                    <div className="m-3">
                        Completed Meetings: {user.completedMeetings}
                    </div>
                    <div className="m-3">
                        Proffesion: {user.profession.name}
                    </div>
                    <div className="m-3">Rate: {user.rate}</div>
                    <button
                        className="btn btn-warning"
                        onClick={() => {
                            handleChangePage();
                        }}
                    >
                        To Users List
                    </button>
                </div>
            </div>
        );
    };

    return <div>{user ? renderInfoUser(user) : <LoadingElement />}</div>;
};
InfoUser.propTypes = {
    match: PropTypes.shape({
        pathName: PropTypes.string,
        params: PropTypes.object
    }),
    history: PropTypes.any
};
export default InfoUser;
