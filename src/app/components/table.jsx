import React from "react";
import PropTypes from "prop-types";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({
    onSort,
    selectedSort,
    columns,
    data,
    onDeleteBtn,
    children
}) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader {...{ onSort, selectedSort, columns }} />
                    <TableBody {...{ columns, data, onDeleteBtn }} />
                </>
            )}
        </table>
    );
};

Table.propTypes = {
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    columns: PropTypes.object,
    data: PropTypes.array,
    onDeleteBtn: PropTypes.func,
    children: PropTypes.array
};
export default Table;
