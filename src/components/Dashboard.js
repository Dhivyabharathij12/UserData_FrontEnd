// src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserTable from "./UserTable";

export default function Dashboard() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Fetch logged-in user info (adjust URL)
    axios.get("http://localhost:8080/api/currentUser")
      .then(res => setCurrentUser(res.data))
      .catch(err => console.error("Failed to load current user:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h1>User Management Dashboard</h1>

      {currentUser ? (
        <div className="mb-4 p-3 border rounded bg-light">
          <h3>Welcome, {currentUser.name}!</h3>
          <p><strong>Username:</strong> {currentUser.userName}</p>
          <p><strong>User Type:</strong> {currentUser.userType}</p>
          <p><strong>Status:</strong> {currentUser.userStatus}</p>
          <p><strong>Online Time:</strong> {currentUser.userOnlineTime}</p>
          <p><strong>Login Start:</strong> {new Date(currentUser.loginStartDate).toLocaleString()}</p>
          <p><strong>Login End:</strong> {new Date(currentUser.loginEndDate).toLocaleString()}</p>
        </div>
      ) : (
        <p>Loading current user info...</p>
      )}

      <UserTable />
    </div>
  );
}
