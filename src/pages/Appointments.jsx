import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { MdEmail, MdMessage, MdBuild, MdPerson } from 'react-icons/md';
import { FaReply } from 'react-icons/fa';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [replies, setReplies] = useState({}); // holds temp replies for each appointment

  useEffect(() => {
    axios.get('https://googlecarpointproject.onrender.com/api/appointments')
      .then(res => setAppointments(res.data))
      .catch(err => console.error('Failed to fetch:', err));
  }, []);

  const sendReply = async (id) => {
    let replyText = replies[id];
  
    
    if (!replyText || replyText.trim() === "") {
      replyText = "Thank you for booking your appointment. We’ll get back to you shortly.";
    }

    try {
      const res = await axios.put(`https://googlecarpointproject.onrender.com/api/appointments/${id}/reply`, { reply: replyText });

      setAppointments(prev =>
        prev.map(appt =>
          appt._id === id ? { ...appt, reply: res.data.reply } : appt
        )
      );

      // Clear the input after sending
      setReplies(prev => ({ ...prev, [id]: "" }));
    } catch (err) {
      console.error("Reply failed", err);
      alert("Server error while sending reply.");
    }
  };

  const handleReplyChange = (id, value) => {
    setReplies(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center  p-3 bg-gray-800 mb-6 text-blue-400">Appointments</h1>
      {appointments.length === 0 ? (
      <div className="text-center text-gray-500 mt-10 text-lg">
        🚫 No appointments found.
      </div>
    ) : ( appointments.map(appt => (
        <motion.div
          key={appt._id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white shadow-lg rounded-xl p-6 mb-6 border border-blue-100 hover:shadow-blue-300 transition-shadow"
        >
          <div className="space-y-2">
            <p className="text-gray-700 flex items-center gap-2"><MdPerson className="text-blue-600" /> <strong>Name:</strong> {appt.name}</p>
            <p className="text-gray-700 flex items-center gap-2"><MdEmail className="text-red-500" /> <strong>Email:</strong> {appt.email}</p>
            <p className="text-gray-700 flex items-center gap-2"><MdBuild className="text-green-600" /> <strong>Service:</strong> {appt.service}</p>
            <p className="text-gray-700 flex items-center gap-2"><MdMessage className="text-yellow-600" /> <strong>Message:</strong> {appt.message}</p>
            <p className="text-gray-700"><strong>Reply:</strong> <span className={`${appt.reply ? 'text-green-600' : 'text-gray-400'}`}>{appt.reply || "Not replied yet"}</span></p>
          </div>

          <input
            type="text"
            placeholder="Type your reply..."
            className="mt-4 border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={replies[appt._id] || ""}
            onChange={(e) => handleReplyChange(appt._id, e.target.value)}
          />

          <button
            onClick={() => sendReply(appt._id)}
            className="mt-3 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            <FaReply /> Send Reply
          </button>
        </motion.div>
      )))}
    </div>
  );
};

export default Appointments;
