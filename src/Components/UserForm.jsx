
import { useState, useEffect } from 'react';
import axios from 'axios';

function UserForm({ user, onSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (user) {
        // Update
        await axios.post('http://localhost:5000/api/updateUser', {
          id: user.id,
          name,
          email
        });
        alert('User updated successfully');
      } else {
        // Add
        await axios.post('http://localhost:5000/api/addUser', {
          name,
          email
        });
         setName('');
      setEmail('');
      console.log("Add Btn Clicked")
        alert('User added successfully');
      }
      onSuccess(); // Notify parent to refresh
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  return (

      <div className="container my-4">
      <div className="card shadow border-primary">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">{user ? '✏️ Update User' : '➕ Add New User'}</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className={`btn ${user ? 'btn-warning' : 'btn-success'}`}>
                {user ? 'Update User' : 'Add User'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
