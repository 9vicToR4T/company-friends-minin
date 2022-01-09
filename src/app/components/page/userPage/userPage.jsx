import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../API";
import LoadingElement from "../../common/loadingComponent";
// import Qualities from "../../ui/qualities/qualities";
// import LoadingElement from "../../common/loadingComponent";
import { useRouteMatch, useHistory } from "react-router-dom";
import EditUserDetails from "../editUserDetails/editUserDetails";
import UserLeftColumn from "./userLeftColumn";
import UserRightColumn from "./userRightColumn";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    const [users, setUsers] = useState([]);
    const history = useHistory();
    const match = useRouteMatch();
    console.log(match, 'match');
    console.log(history);
    userId &&
        useEffect(() => {
            console.log("set user");
            api.users.getById(userId).then((userData) => setUser(userData));
        }, [history.location.pathname]);

    useEffect(() => {
        console.log('set users');
        api.users.fetchAll().then((usersData) => setUsers(usersData));
    }, []);

    const renderInfoUser = (user) => {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <UserLeftColumn user={user} />
                    <UserRightColumn user={user} users={users} />
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

// const history = useHistory();
// const match = useRouteMatch();

// const handleChangePage = () => {
//     history.push("/users");
// };

// const renderInfoUser = (user) => {
//     return (
//         <div className="d-flex justify-content-center text-center">
//             <div>
//                 <h2 className="m-3">{user.name}</h2>
//                 <hr />
//                 <div className="m-3">
//                     Proffesion: {user.profession.name}
//                 </div>
//                 <div className="m-3">
//                     Qualities:{" "}
//                     {user.qualities.map((el, index) => (
//                         <div key={el + index}>
//                             <Qualities {...el} />
//                         </div>
//                     ))}
//                 </div>
//                 <div className="m-3">
//                     Completed Meetings: {user.completedMeetings}
//                 </div>
//                 <div className="m-3">Rate: {user.rate}</div>
//                 <div className="m-3">Sex: {user.sex}</div>
//                 <div className="m-3">Email: {user.email}</div>
//                 <div>
//                     <button
//                         className="btn btn-warning mt-3"
//                         onClick={() => {
//                             handleChangePage();
//                         }}
//                     >
//                         To Users List
//                     </button>
//                 </div>
//                 <div>
//                     <Link
//                         className="btn btn-dark mt-3"
//                         to={`${match.url}/edit`}
//                     >
//                         Update
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };
