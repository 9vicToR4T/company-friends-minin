import React, { useState, useEffect } from "react";
import SelectField from "../../common/form/selectField";
import PropTypes from "prop-types";
import TextAreaField from "../../common/form/textareaField";
import api from "../../../API";
import NewComment from "./newComment";

const UserRightColumn = ({ user, users }) => {
    const callApiComments = api.comments;
    const [data, setData] = useState({
        name: "",
        pageId: user._id,
        userId: "",
        content: ""
    });

    if (data.name !== "") {
        const user = users && users.find((ob) => ob.name === data.name);
        data.userId = user._id;
    }

    // const [comments, setComments] = useState([]);

    const [userComments, setUserComments] = useState([]);

    user &&
        useEffect(() => {
            // api.comments.fetchAll().then((com) => setComments(com));
            callApiComments
                .fetchCommentsForUser(user._id)
                .then((c) => setUserComments(c))
                .catch((err) => console.error(err));
        }, [data]);

    const handleChange = (objectTarget) => {
        setData((prevState) => ({
            ...prevState,
            [objectTarget.name]: objectTarget.value
        }));
    };

    const showUserComments = (arrayOfComments) => {
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <h2>Comments</h2>
                    <hr />

                    {arrayOfComments.map((com) => {
                        const author =
                            users && users.find((ob) => ob._id === com.userId);

                        return (
                            <NewComment
                                key={com._id}
                                author={author}
                                com={com}
                                onRemove={handleRemoveComment}
                            />
                        );
                    })}
                </div>
            </div>
        );
    };

    const handleAddComment = () => {
        callApiComments.add(data);
        setData({
            name: "",
            pageId: user._id,
            userId: "",
            content: ""
        });
    };
    const handleRemoveComment = (id) => {
        callApiComments.remove(id);
        setData({
            name: "",
            pageId: user._id,
            userId: "",
            content: ""
        });
    };
    return (
        <div className="col-md-8">
            <div className="card mb-2">
                <div className="card-body">
                    <div>
                        <h2>New comment</h2>
                        <div className="mb-4">
                            <SelectField
                                label="Name"
                                name="name"
                                valueSelect={data.name}
                                defaultOption="Choose your name"
                                onChangeSelect={handleChange}
                                data={users}
                            />
                        </div>
                        <div className="mb-4">
                            <TextAreaField
                                label="New Comment"
                                name="content"
                                value={data.content}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            className="btn btn-warning"
                            onClick={() => handleAddComment()}
                            disabled={data.name === "" || data.comment === ""}
                        >
                            Post new comment
                        </button>
                    </div>
                </div>
            </div>
            {userComments.length > 0 && showUserComments(userComments)}
        </div>
    );
};

export default UserRightColumn;

UserRightColumn.propTypes = {
    user: PropTypes.object,
    users: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
