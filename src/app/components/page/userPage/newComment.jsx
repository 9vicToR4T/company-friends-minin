import React from "react";
import PropTypes from "prop-types";
import { useUser } from "../../../hooks/useUser";
import { useAuth } from "../../../hooks/useAuth";
const NewComment = ({ com: { _id, content, createdAt, userId }, onRemove }) => {
    const timeSince = (date) => {
        const seconds = Math.floor(new Date().getTime() / 1000 - date / 1000);
        let interval = Math.floor(seconds / 31536000);

        if (interval > 1) return interval + " years ago";

        interval = Math.floor(seconds / 2592000);
        if (interval > 1) return interval + " mounth ago";

        interval = Math.floor(seconds / 86400);
        if (interval >= 1) return interval + " days ago";

        interval = Math.floor(seconds / 3600);
        if (interval >= 1) return interval + " hour ago";

        interval = Math.floor(seconds / 60);
        if (interval > 1) return interval + " minutes ago";

        return Math.floor(seconds) + " seconds ago";
    };

    const { getUserById } = useUser();
    const author = getUserById(userId);
    const { currentUser } = useAuth();

    return (
        <div className="bg-light card-body mb-3">
            <div className="row">
                <div className="col">
                    <div className="d-flex flex-start">
                        <img
                            src={author.image}
                            className="
                                                    rounded-circle
                                                    shadow-1-strong
                                                    me-3
                                                "
                            alt="avatar"
                            width="65"
                            height="65"
                        />
                        <div
                            className="
                                                    flex-grow-1 flex-shrink-1
                                                "
                        >
                            <div className="mb-4">
                                <div
                                    className="
                                                            d-flex
                                                            justify-content-between
                                                            align-items-center
                                                        "
                                >
                                    <p className="mb-1">
                                        {author.name}
                                        <span className="small ms-3">
                                            {"posted " + timeSince(+createdAt)}
                                        </span>
                                    </p>
                                    {currentUser._id === userId && (
                                        <button
                                            className="
                                                                btn btn-sm
                                                                text-primary
                                                                d-flex
                                                                align-items-center
                                                            "
                                            onClick={() => onRemove(_id)}
                                        >
                                            <i
                                                className="
                                                                    bi bi-x-lg
                                                                "
                                            ></i>
                                        </button>
                                    )}
                                </div>
                                <p className="small mb-0">{content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewComment;
NewComment.propTypes = {
    com: PropTypes.object,
    onRemove: PropTypes.func
};
