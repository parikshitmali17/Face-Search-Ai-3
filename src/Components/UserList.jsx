import { useEffect, useState } from 'react';
import axios from 'axios'; // if you are using axios
import UserForm from './UserForm';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [AddNewUSer,setAddNewUser]=useState(false)
    function AddUser(){
      setAddNewUser(true);
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
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {users.map(user => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
    <button onClick={AddUser}>Add New User</button>
    {(AddNewUSer) ? <UserForm/> : null}
  </div>
  );
}

export default UsersList;
