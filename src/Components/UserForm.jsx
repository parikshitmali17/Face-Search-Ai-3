// UserForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form is submit");
    try {
      // Send the user data to the server
      await axios.post('http://localhost:5000/api/users', { name, email });
      alert("User saved successfully!");
      setName('');
      setEmail('');
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{margin:'15px'}}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
