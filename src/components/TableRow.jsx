import React from 'react';
import Btn from './ButtonDelete';

const TableRow = ({  id, name, profession, qualities, completedMeetings, rate }) => {
	if(typeof qualities === 'object'){	
	  qualities = qualities.map( el =>{
			let clName = 'badge me-2 bg-'
		return (
		<span 
			key={el['_id']}
	        className={clName +=el.color}
			>
				{el.name}
		</span>  )
	  } )
  }
	return (
    <tr key={id}>
      <td>{name}</td>
      <td>{qualities}</td>
	  <td>{profession}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
	  <td>{<Btn id={id}/>}</td>
    </tr>
  );
};
 
export default TableRow;