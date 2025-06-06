import React, { useEffect, useState } from 'react';

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const mockUsers = [
      { id: 1, name: 'Alice', email: 'alice@example.com', role: 'user' },
      { id: 2, name: 'Bob', email: 'bob@example.com', role: 'admin' },
    ];
    setUsers(mockUsers);
  }, []);

  return (
    <div className="admin-users-container">
      <h2>Manage Users</h2>
      <table className="admin-users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;
