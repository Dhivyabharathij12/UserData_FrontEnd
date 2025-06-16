import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchUsers = async () => {
    console.log("Fetching users...");
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("http://localhost:8080/api/users");
      console.log("Fetched users:", res.data);
      setUsers(res.data);
      setFilter("All");             
      setLastUpdated(new Date());   
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) => filter === "All" || user.userType === filter
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <label htmlFor="userTypeFilter" className="me-2 fw-bold">
          Filter by User Type:
        </label>
        <select
          id="userTypeFilter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="form-select d-inline-block w-auto"
        >
          <option value="All">All</option>
          <option value="Administrator">Administrator</option>
          <option value="Agent">Agent</option>
          <option value="Promoter">Promoter</option>
        </select>

        <button className="btn btn-primary" onClick={fetchUsers} disabled={loading}>
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {lastUpdated && (
        <div className="mb-2 text-muted" style={{ fontSize: "0.9rem" }}>
          Last refreshed: {lastUpdated.toLocaleTimeString()}
        </div>
      )}

      <table className="table table-striped table-bordered">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>User Type</th>
            <th>Status</th>
            <th>Online Time</th>
            <th>Login Start</th>
            <th>Login End</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center">
                No users found.
              </td>
            </tr>
          ) : (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.username}</td>
                <td>{user.userType}</td>
                <td>{user.userStatus}</td>
                <td>{user.timeOnline}</td>
                <td>
                  {user.loginStartDate
                    ? new Date(user.loginStartDate).toLocaleString()
                    : ""}
                </td>
                <td>
                  {user.loginEndDate
                    ? new Date(user.loginEndDate).toLocaleString()
                    : ""}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
