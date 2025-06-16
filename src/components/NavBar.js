import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/dashboard">User Management</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
            </li>
            {/* Add more nav items here */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
