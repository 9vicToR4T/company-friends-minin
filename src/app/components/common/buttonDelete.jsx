import { PropTypes } from "prop-types";
import React from "react";

const Btn = ({ id, onDeleteBtn }) => {
    return (
        <button
            onClick={(e) => onDeleteBtn(e)}
            data-id={id}
            className="badge btn btn-danger"
        >
            delete
        </button>
    );
};

Btn.propTypes = {
    id: PropTypes.string,
    onDeleteBtn: PropTypes.func
};
export default Btn;
