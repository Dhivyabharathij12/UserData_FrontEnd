import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/users');
      setUsers(res.data);
    } catch (err) {
      console.error('Failed to fetch users', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filtered = filter ? users.filter(u => u.userType === filter) : users;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center my-3">
        <select
          className="form-select w-25"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Administrator">Administrator</option>
          <option value="Agent">Agent</option>
          <option value="Promoter">Promoter</option>
        </select>
        <button className="btn btn-secondary" onClick={fetchUsers}>
          Refresh
        </button>
      </div>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Type</th>
            <th>Status</th>
            <th>Online Time</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                No users found.
              </td>
            </tr>
          ) : (
            filtered.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.userType}</td>
                <td>{user.userStatus}</td>
                <td>{user.timeOnline}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
