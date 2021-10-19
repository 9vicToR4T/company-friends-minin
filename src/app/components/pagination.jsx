import React from "react";


const Pagination = ({ itemsCount, pageSize, onChangePage, pageNr }) => {
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
        <li className={'page-item ' +(pageNr === page ? 'active' : '')} key={page}>
          <a className="page-link" onClick={() => onChangePage(page)}>
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
