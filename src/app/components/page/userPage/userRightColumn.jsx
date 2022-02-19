import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextAreaField from "../../common/form/textareaField";
import NewComment from "./newComment";
import { useComments } from "../../../hooks/useComments";
import { validator } from "../../../utils/validator";
import _ from "lodash";

const UserRightColumn = ({ user, users }) => {
    const { comments, createComment, isLoading, removeComment } = useComments();
    const sortComments = _.orderBy(comments, ["createdAt"], "desc");
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    useEffect(() => {
        validate(data);
    }, [data]);

    const handleChange = (objectTarget) => {
        setData((prevState) => ({
            ...prevState,
            [objectTarget.name]: objectTarget.value
        }));
    };

    const validateConfig = {
        content: {
            commentLength: {
                message: "Comment must have minim 3 characters",
                value: 3
            }
        }
    };
    const validate = (data) => {
        const errors = validator(data, validateConfig);
        setError(errors);
    };
    const showUserComments = (arrayOfComments) => {
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <h2>Comments</h2>
                    <hr />

                    {arrayOfComments.map((com) => {
                        return (
                            <NewComment
                                key={com._id}
                                com={com}
                                onRemove={handleRemoveComment}
                            />
                        );
                    })}
                </div>
            </div>
        );
    };

    const handleAddComment = (data) => {
        createComment(data);
        setData({});
    };
    const handleRemoveComment = (id) => {
        removeComment(id);
    };
    useEffect(() => {
        validate(data);
    }, [data]);
    return (
        <div className="col-md-8">
            <div className="card mb-2">
                <div className="card-body">
                    <div>
                        <h2>New comment</h2>
                        <div className="mb-4">
                            <TextAreaField
                                label="New Comment"
                                name="content"
                                value={data.content || ""}
                                onChange={handleChange}
                                error={error["content"]}
                            />
                        </div>
                        <button
                            className="btn btn-warning"
                            onClick={() => handleAddComment(data)}
                            disabled={
                                !data?.content || data?.content.length < 3
                            }
                        >
                            Post new comment
                        </button>
                    </div>
                </div>
            </div>
            {sortComments.length > 0 &&
                !isLoading &&
                showUserComments(sortComments)}
        </div>
    );
};

export default UserRightColumn;

UserRightColumn.propTypes = {
    user: PropTypes.object,
    users: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
