import React from "react";
import Navbar from "./NavBar";
import UserTable from "./UserTable";

export default function Dashboard({ user }) {
  return (
    <div className="container mt-4">
      <Navbar user={user} />
      <UserTable />
    </div>
  );
}
