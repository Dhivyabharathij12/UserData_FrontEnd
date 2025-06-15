import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ setUser }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/users/login', {
        userName: form.username, // ✅ this matches the backend field
        password: form.password,
      });
      setUser(res.data);
      setError('');
    } catch {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username (e.g. sofiaMendoza)"
        className="form-control"
        value={form.username}
        onChange={e => setForm({ ...form, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="form-control mt-2"
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })}
      />
      <button className="btn btn-primary mt-3 w-100" onClick={login}>
        Login
      </button>
      {error && <p className="text-danger mt-2">{error}</p>}
    </div>
  );
}
