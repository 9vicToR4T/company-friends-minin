import React, { useState } from "react";
import api from "../API";
import TableRow from "./TableRow";
import uuid from "react-uuid";


const renderListOfPeople = (obj) =>{
    return obj.map((el, index) => (
      <TableRow
        key={uuid()}
        id={el['_id']}
        name={el["name"]}
        profession={el["profession"]["name"]}
        qualities={el["qualities"]}
        completedMeetings={el["completedMeetings"]}
        rate={el["rate"]}
      />
    ));
  }

 const renderPhrase = (number) => {
   let res
   !number
   ? res = <div className='m-3 badge bg-danger'>No one will go with you to the party</div>
   : res =<div className='m-3 badge bg-primary'>{number} people will go to the party with you</div> 
      return res
  };


const Users = () => {

  const [users, setUsers] = useState(api.users.fetchAll);

const handleDeleteBtn = (e) =>{
  const {target} = e
  const getId = target.dataset.id
  setUsers(users.filter( user => getId !== user['_id']))
  

}

  return (
    <React.Fragment>
      {renderPhrase(users.length)}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              Name
            </th>
            <th scope="col">
              Role
            </th>
            <th scope="col">
              Job
            </th>
            <th scope="col">
              Met
            </th>
            <th scope="col">
              Note
            </th>
            <th scope="col"></th>
            <th></th>
          </tr>
        </thead>
        <tbody onClick={(e) => handleDeleteBtn(e)}>
          {renderListOfPeople(users)}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Users;
