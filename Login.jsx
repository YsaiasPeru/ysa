import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/dashboard';
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input className="w-full p-2 mb-2 border" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="w-full p-2 mb-2 border" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="w-full bg-blue-500 text-white p-2">Login</button>
    </form>
  );
}
