import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  return user ? <Dashboard /> : <Login setUser={setUser} />;
}

export default App;
