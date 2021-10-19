import React, {useState} from "react";
import uuid from "react-uuid";
import User from "./user";
import Pagination from "./pagination";

const Users = ({ users, onDeleteBtn }) => {
  const pageSize = 4
  const usersLength = users.length


  const[pageNr, setPageNr] = useState(1)
  const handleChangePage = (indexPage) =>{
    console.log(indexPage, 'indexitem');
    setPageNr(indexPage)
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Job</th>
            <th scope="col">Met</th>
            <th scope="col">Note</th>
            <th scope="col">Mark</th>
            <th></th>
          </tr>
        </thead>
        <tbody onClick={(e) => onDeleteBtn(e)}>
          {users.map((el) => (
            <User
              key={uuid()}
              id={el["_id"]}
              name={el["name"]}
              profession={el["profession"]["name"]}
              qualities={el["qualities"]}
              completedMeetings={el["completedMeetings"]}
              rate={el["rate"]}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        itemsCount={usersLength}
        pageSize={pageSize}
        pageNr={pageNr}
        onChangePage={handleChangePage}

      />
    </>
  );
};

export default Users;
