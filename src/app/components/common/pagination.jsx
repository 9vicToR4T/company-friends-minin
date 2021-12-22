import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onChangePage, currentPage }) => {
    const pageElements = Math.ceil(itemsCount / pageSize);
    const numberOfPages = new Array(+`${pageElements}`)
        .fill("")
        .map((_, index) => index + 1);

    if (numberOfPages === 1) {
        return null;
    }

    return (
        <ul className="pagination">
            {numberOfPages.map((page) => (
                <li
                    className={
                        "page-item " + (currentPage === page ? "active" : "")
                    }
                    key={page}
                >
                    <a className="page-link" onClick={() => onChangePage(page)}>
                        {page}
                    </a>
                </li>
            ))}
        </ul>
    );
};
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onChangePage: PropTypes.func
};
export default Pagination;