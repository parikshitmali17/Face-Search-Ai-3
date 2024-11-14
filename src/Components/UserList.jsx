import { useEffect, useState } from 'react';
import axios from 'axios'; // if you are using axios

function UsersList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
    //   // Use fetch API
    //   const response = await fetch('/users');
    //   const data = await response.json();
    //   setUsers(data);

      // Alternatively, with axios
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
    // <div>
    //   <h1>Users List</h1>
    //   <ul>
    //     {users.map(user => (
    //       <li key={user.id}>{user.name} - {user.email}</li>
    //     ))}
    //   </ul>
    // </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
    <h1>Users List</h1>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {users.map(user => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  </div>
  );
}

export default UsersList;
