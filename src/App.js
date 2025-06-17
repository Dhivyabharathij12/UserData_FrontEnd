import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
      {currentUser ? (
        <Dashboard user={currentUser} />
      ) : (
        <Login onLogin={setCurrentUser} />
      )}
    </div>
  );
}
