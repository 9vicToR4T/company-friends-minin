import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ columns, onSort, selectedSort }) => {
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
        if (selectedSort.path === pathItem) {
            if (selectedSort.order === "asc") {
                return <i className="bi bi-caret-down-fill"></i>;
            } else if (selectedSort.order === "desc") {
                return <i className="bi bi-caret-up-fill"></i>;
            } else {
                return null;
            }
        }
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((item) => {
                    const path = columns[item].path;
                    return (
                        <th
                            key={item}
                            onClick={path ? () => handleSort(path) : undefined}
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
