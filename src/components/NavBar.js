import React from "react";

export default function Navbar({ user }) {
  return (
    <div className="mb-4 p-3 border rounded bg-light">
      <h3>Welcome, {user.firstName || user.name}!</h3>
      <p><strong>Username:</strong> {user.username || user.userName}</p>
      <p><strong>User Type:</strong> {user.userType}</p>
      <p><strong>Status:</strong> {user.userStatus || user.status}</p>
      {/* Add more details if backend provides */}
    </div>
  );
}
