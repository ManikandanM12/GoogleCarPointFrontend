import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  FaMousePointer,
  FaClock,
  FaScroll,
  FaCalendarAlt,
  FaChartBar,
  FaChartLine
} from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Legend
} from 'recharts';
import { motion } from 'framer-motion';

const UserAnalyticsDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://googlecarpointproject.onrender.com/api/user-activity')
      .then(res => setData(res.data))
      .catch(err => console.error("Failed to fetch user activity:", err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10 text-center text-blue-800"
      >
        <FaChartBar className="inline mr-3 text-blue-600" />
        User Activity Analytics Dashboard
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white border p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
            <FaChartLine className="mr-2" /> Time Spent per Page
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="page" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalDuration" fill="#4299e1" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white border p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
            <FaChartLine className="mr-2" /> Clicks Over Pages
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="page" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="totalClicks" stroke="#48bb78" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {data.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white border p-6 rounded-xl shadow-md transition"
          >
            <div className="mb-2 text-lg font-semibold text-blue-600">
              📄 Page: <span className="text-gray-700">{item.page}</span>
            </div>
            <div className="flex flex-col gap-2 text-gray-600">
              <p><FaClock className="inline text-blue-500 mr-2" />Time Spent: {item.totalDuration}s</p>
              <p><FaMousePointer className="inline text-green-600 mr-2" />Clicks: {item.totalClicks}</p>
              <p><FaScroll className="inline text-yellow-500 mr-2" />Max Scroll: {item.maxScroll}%</p>
              <p><FaCalendarAlt className="inline text-purple-600 mr-2" />Last Visit: {new Date(item.updatedAt).toLocaleString()}</p>
              <p className="text-sm text-gray-500 ml-7">Visits: {item.visits}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default UserAnalyticsDashboard;
