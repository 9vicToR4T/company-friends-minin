import React from "react";
import PropTypes from "prop-types";
import LoadingElement from "../../common/loadingComponent";
import { useRouteMatch, useHistory } from "react-router-dom";
import EditUserDetails from "../editUserDetails/editUserDetails";
import UserLeftColumn from "./userLeftColumn";
import UserRightColumn from "./userRightColumn";
import { useUser } from "../../../hooks/useUser";
import { CommentsProvider } from "../../../hooks/useComments";
import { useAuth } from "../../../hooks/useAuth";

const UserPage = ({ userId }) => {
    const { currentUser } = useAuth();
    console.log(currentUser, "current");
    const { users, getUserById } = useUser();
    const user = getUserById(userId);
    const history = useHistory();
    console.log(history.location.pathname.includes("edit"));
    const match = useRouteMatch();
    console.log(match, "match");

    const renderInfoUser = (user) => {
        return (
            <div className="container">
                <div className="row gutters-sm pt-5">
                    <UserLeftColumn user={user} />
                    <CommentsProvider>
                        <UserRightColumn user={user} users={users} />
                    </CommentsProvider>
                </div>
            </div>
        );
    };

    if (user) {
        return (
            <>
                {history.location.pathname.includes("edit")
                ? (
                    history.location.pathname === `${match.url}/edit` && <EditUserDetails user={currentUser} />
                )
                : user
                ? (
                    renderInfoUser(user)
                )
                : (
                    <LoadingElement />
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
