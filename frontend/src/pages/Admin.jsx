import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('/api/users/');
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
      {/* Add create, edit, and delete functionality here */}
    </div>
  );
};

export default Admin;
