import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { email, password });
      alert('Registered successfully');
      window.location.href = '/';
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input className="w-full p-2 mb-2 border" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="w-full p-2 mb-2 border" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="w-full bg-green-500 text-white p-2">Register</button>
    </form>
  );
}
