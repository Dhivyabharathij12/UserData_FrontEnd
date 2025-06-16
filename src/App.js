// src/App.js
import React, { useEffect, useState } from "react";
import UserTable from "./components/UserTable";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetching current user info (you can replace this with real API call)
  useEffect(() => {
    setLoadingUser(true);
    setError(null);
    // Simulated async fetch with timeout
    setTimeout(() => {
      // Example current user data:
      const user = {
        id: 6,
        firstName: "Ana",
        userName: "anaRamirez",
        userType: "Administrator",
        userStatus: "Inactive",
        userOnlineTime: "1h 45m",
        loginStartDate: "2025-06-13T09:00:00",
        loginEndDate: "2025-06-13T10:45:00"
      };
      setCurrentUser(user);
      setLoadingUser(false);
    }, 1500);
  }, []);

  if (loadingUser) {
    return <p>Loading current user info...</p>; // Show loading while fetching user
  }

  if (error) {
    return <p className="text-danger">Error loading user info: {error}</p>;
  }

  return (
    <div className="container mt-4">
      <h1>User Management Dashboard</h1>
      <div className="mb-3">
        <h4>Welcome, {currentUser.firstName}!</h4>
        <p>
          <strong>Username:</strong> {currentUser.userName} <br />
          <strong>User Type:</strong> {currentUser.userType} <br />
          <strong>Status:</strong> {currentUser.userStatus} <br />
          <strong>Online Time:</strong> {currentUser.userOnlineTime} <br />
          <strong>Login Start:</strong>{" "}
          {new Date(currentUser.loginStartDate).toLocaleString()} <br />
          <strong>Login End:</strong>{" "}
          {new Date(currentUser.loginEndDate).toLocaleString()}
        </p>
      </div>

      <UserTable />
    </div>
  );
}
