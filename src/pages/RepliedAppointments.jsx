import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { MdPerson, MdEmail, MdBuild, MdMessage, MdCheckCircle } from 'react-icons/md';

const RepliedAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState("daily");

  useEffect(() => {
    fetchRepliedAppointments();
  }, []);

  const fetchRepliedAppointments = () => {
    axios.get('https://googlecarpointproject.onrender.com/api/appointments/replied')
      .then(res => setAppointments(res.data))
      .catch(err => console.error("Error fetching replied messages:", err));
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://googlecarpointproject.onrender.com/api/appointments/appointments/replied/delete?type=${filter}`);
      fetchRepliedAppointments(); // refresh after deletion
      console.log("deleted")
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete appointments.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold bg-gray-800 p-2 text-center mb-6 text-green-400">Replied Appointments</h1>

      <div className="flex justify-between items-center mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded shadow-sm focus:ring-2 focus:ring-green-400"
        >
          <option value="daily">Delete Today's</option>
          <option value="weekly">Delete This Week's</option>
          <option value="monthly">Delete This Month's</option>
        </select>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Delete Selected
        </button>
      </div>

      {appointments.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-10">
          No replied appointments available.
        </div>
      ) : (
        appointments.map(appt => (
          <motion.div
            key={appt._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-green-200 rounded-xl p-6 mb-6 shadow-md hover:shadow-green-300 transition-shadow"
          >
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2"><MdPerson className="text-green-600" /> <strong>Name:</strong> {appt.name}</p>
              <p className="flex items-center gap-2"><MdEmail className="text-red-500" /> <strong>Email:</strong> {appt.email}</p>
              <p className="flex items-center gap-2"><MdBuild className="text-blue-600" /> <strong>Service:</strong> {appt.service}</p>
              <p className="flex items-center gap-2"><MdMessage className="text-yellow-600" /> <strong>Message:</strong> {appt.message}</p>
              <p className="flex items-center gap-2"><MdCheckCircle className="text-green-600" /> <strong>Reply:</strong> <span className="text-green-700">{appt.reply}</span></p>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default RepliedAppointments;
