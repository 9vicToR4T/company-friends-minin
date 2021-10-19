import React from 'react';
import BookMark from './bookMark';
import Btn from './buttonDelete';
import Qualities from './qualities';


const User = ({ 
	 id, 
	 name,
	 profession,
	 qualities,
	 completedMeetings,
	 rate }) => {

	return (
    <tr key={id}>
      <td>{name}</td>
      <td>{ qualities.map( el => <Qualities
          key={el["_id"]}
          id={el["_id"]}
          name={el["name"]}
          color={el["color"]}
        />
	  )}</td>
	  <td>{profession}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
	  
		  <BookMark
	  		/>
	  
	  <td>{<Btn id={id}/>}</td>
    </tr>
  );
};
 
export default User;