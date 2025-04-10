import React, { useState } from 'react';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      await axios.post('https://googlecarpointproject.onrender.com/api/auth/register', form);
      navigate('/login');
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input className="w-full p-2 border rounded mb-2" name="name" placeholder="Name" onChange={handleChange} />
        <input className="w-full p-2 border rounded mb-2" name="email" placeholder="Email" onChange={handleChange} />
        <input className="w-full p-2 border rounded mb-4" type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
}

export default Register;
