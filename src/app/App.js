import React,{useState} from 'react';
import SerchStatus from "./components/searchStatus";
import Users from './components/users';
import api from './API/index';

const App = () => {

 const [users, setUsers] = useState(api.users.fetchAll);
  
const handleDeleteBtn = (e) =>{
  const {target} = e
  const getId = target.dataset.id
  setUsers(users.filter( user => getId !== user['_id']))
}


	return ( 
		<div>
			<SerchStatus
				length={users.length}
			/>
			<Users
				users={users}
				onDeleteBtn={handleDeleteBtn}
				/>

		</div>
	 );
}
 
export default App;