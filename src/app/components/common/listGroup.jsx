import React from "react";
import PropTypes from "prop-types";

const ListGroup = ({
    items,
    onItemSelect,
    propertyId,
    propertyContent,
    selectedProf
}) => {
    const arrayTypeOfData = (arr) => {
        return arr.map((item) => (
            <li
                key={item[propertyId]}
                onClick={() => onItemSelect(item)}
                className={
                    "list-group-item" + (selectedProf === item ? " active" : "")
                }
                role="button"
            >
                {item[propertyContent]}
            </li>
        ));
    };

    const isArray = items.constructor === Array;

    return (
        <ul className="list-group">
            {isArray
                ? arrayTypeOfData(items)
                : Object.keys(items).map((item) => (
                      <li
                          key={items[item][propertyId]}
                          onClick={() => onItemSelect(items[item])}
                          className={
                              "list-group-item" +
                              (selectedProf === items[item] ? " active" : "")
                          }
                          role="button"
                      >
                          {items[item][propertyContent]}
                      </li>
                  ))}
        </ul>
    );
};
ListGroup.defaultProps = {
    propertyId: "_id",
    propertyContent: "name"
};
ListGroup.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onItemSelect: PropTypes.func,
    propertyContent: PropTypes.string,
    propertyId: PropTypes.string,
    selectedProf: PropTypes.object
};
export default ListGroup;
