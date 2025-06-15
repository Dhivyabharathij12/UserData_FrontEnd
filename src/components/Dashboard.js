import React from 'react';
import UserTable from './UserTable';

export default function Dashboard() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <span className="navbar-brand ms-2">User System</span>
      </nav>
      <div className="container mt-4">
        <UserTable />
      </div>
    </div>
  );
}
