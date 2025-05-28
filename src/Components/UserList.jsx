


import { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from './UserForm';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [addNewUser, setAddNewUser] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null); // <-- Track user being updated

  function AddUser() {
    setUserToEdit(null); // reset edit mode
    setAddNewUser(true);
    console.log("Add Btn CLiked")
  }

  const handleDelete = async (userId) => {
    try {
      await axios.post(`http://localhost:5000/api/deleteUser`, { userId });
      alert("User Deleted Successfully!");
      fetchUsers(); // refresh list
    } catch (error) {
      console.error("Error in Deleting user:", error);
    }
  };

  const handleUpdate = (user) => {
    setUserToEdit(user);  // Set selected user for update
    setAddNewUser(true);  // Reuse the form
    console.log("Updated btn Clicked")
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [users]);

  // Called from UserForm when user is added or updated
  const handleFormSuccess = () => {
    setAddNewUser(false);
    setUserToEdit(null);
    fetchUsers(); // Refresh list
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
      <h1>Users List</h1>
     

 {addNewUser && (
        <UserForm user={userToEdit} onSuccess={handleFormSuccess} />
      )}

         <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="text-primary">User Directory</h3>
        <button onClick={AddUser} className="btn btn-success">➕ Add New User</button>
      </div>

      <div className="row">
        {users.map((user) => (
          <div className="col-md-6 col-lg-4 mb-3" key={user.id}>
            <div className="card shadow-sm border-primary h-100">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text text-muted">{user.email}</p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handleUpdate(user)}
                  >
                    ✏️ Update
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
     
    </div>
  );
}

export default UsersList;
