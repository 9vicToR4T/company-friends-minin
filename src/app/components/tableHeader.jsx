import React from "react";
import PropTypes from "prop-types";
const TableHeader = ({ columns, onSort, selectedSort }) => {
    // let arrow;
    // arrow(<i className="bi bi-caret-down-fill"></i>);
    // arrow = (<i className="bi bi-caret-up-fill"></i>);
    const handleSort = (item) => {
        if (item === selectedSort.path) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };

    const setArrows = (selectedSort, pathItem) => {
        console.log(selectedSort, 'selectedSort');
        console.log(pathItem, 'path');
        if (selectedSort.path === pathItem) {
            if (selectedSort.order === 'asc') {
                return <i className="bi bi-caret-down-fill"></i>;
            } else if (selectedSort.order === 'desc') {
                return <i className="bi bi-caret-up-fill"></i>;
            } else {
                return null;
            }
        };
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((item) => {
                    const path = columns[item].path;
                    return (
                        <th
                            key={item}
                            onClick={
                                path
                                    ? () => handleSort(path)
                                    : undefined
                            }
                            {...{ role: path && "button" }}
                            scope="col"
                        >
                            {columns[item].name}
                            {setArrows(selectedSort, path)}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};
TableHeader.propTypes = {
    columns: PropTypes.object.isRequired,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object.isRequired
};

export default TableHeader;

// <th scope="col">Role</th>
// <th onClick={() => handleSort("profession.name")} scope="col">
//     Job
// </th>
// <th onClick={() => handleSort("completedMeetings")} scope="col">
//     Met
// </th>
// <th onClick={() => handleSort("rate")} scope="col">
//     Note
// </th>
// <th scope="col">Mark</th>
// <th></th>
