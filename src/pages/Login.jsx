import React, { useState, useContext } from 'react';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext.jsx';


function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);


  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://googlecarpointproject.onrender.com/api/auth/login', form);
  
      // Save token
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('adminToken', response.data.token);
  
      // Get user data using token
      const res = await axios.get('https://googlecarpointproject.onrender.com/api/auth/me', {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      });
  
      setUser(res.data);
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };
  
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50">
      {/* Left Grid – Image/Info */}
      <div className="flex flex-col justify-center items-center bg-blue-600 text-white px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
        <p className="text-lg text-center max-w-md">
          Manage your car workshop like a pro. Track customers, bookings, and services all in one place.
        </p>
        <img
          src="https://i.ibb.co/TMXvyBRq/large.png"
          alt="Car Workshop"
          className="w-1/2 mt-10 hidden md:block rounded-full p-10"
        />
      </div>

      {/* Right Grid – Form */}
      <div className="flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login to your account</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Login
            </button>
          </form>
          {/* <p className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
