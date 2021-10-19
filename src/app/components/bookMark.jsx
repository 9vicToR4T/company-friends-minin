import React, {useState} from 'react';



const BookMark = () => {
    const [bookmark, setBookmark] = useState(false);
    return (
      <td>
        <button onClick={() => setBookmark(!bookmark)}>
          {bookmark ? (
            <i className="bi bi-bookmark-fill"></i>
          ) : (
            <i className="bi bi-bookmark"></i>
          )}
        </button>
      </td>
    );
};
 
export default BookMark;