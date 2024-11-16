import { useEffect, useState } from 'react';
import axios from 'axios'; // if you are using axios
import UserForm from './UserForm';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [AddNewUSer,setAddNewUser]=useState(false)
    function AddUser(){
      setAddNewUser(true);
    }
    const handleDelete= async(user)=>{
console.log(`Butoo with user clicked ${user}`)
try {
  // Send the user data to the server
  await axios.post(`http://localhost:5000/api/deleteUser`, { user });
  alert("User Deleted Successfully!");

} catch (error) {
  console.error("Error in Deleting user:", error);
}

    }
  const fetchUsers = async () => {
    try {

      const response = await axios.get('/users');
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
    <h1>Users List</h1>
    <ol style={{  padding: 0 }}>
      {users.map(user => (
        
        <li key={user.id}>{user.name} - {user.email} <button id={user.id}  key={user.id} type="button" className="btn btn-dark btn-sm">Update</button> <button onClick={()=>handleDelete(user.id)} type="button" class="btn btn-link">Delete</button> </li> 
        
      ))}
    </ol>
    <button onClick={AddUser}>Add New User</button>
    {(AddNewUSer) ? <UserForm/> : null}
  </div>
  );
}

export default UsersList;
