import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import {
  FaCar,
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaTools,
  FaUserAlt,
  FaStickyNote
} from 'react-icons/fa';

const CheckInListPage = () => {
  const [checkins, setCheckins] = useState([]);

  useEffect(() => {
    const fetchCheckins = async () => {
      try {
        const response = await axios.get('https://googlecarpointproject.onrender.com/api/checkin');
        setCheckins(response.data);
      } catch (error) {
        console.error('Error fetching check-ins:', error);
      }
    };

    fetchCheckins();
  }, []);

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-center bg-blue-700 p-3 text-white rounded-lg shadow mb-6">
        Check-In List
      </h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-1 gap-6">
        {checkins.map((checkin) => (
          <motion.div
            key={checkin._id}
            className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <FaCar className="text-blue-600 mr-2" size={28} />
                <h3 className="text-lg font-semibold text-gray-800">{checkin.carNumber}</h3>
              </div>
              <FaCalendarAlt className="text-gray-500" size={20} />
            </div>

            <p className="text-gray-700 mb-2 flex items-center">
              <FaUserAlt className="text-purple-600 mr-2" />
              <strong className="mr-1">Customer:</strong> {checkin.customerName}
            </p>

            <p className="text-gray-700 mb-2 flex items-center">
              <FaPhoneAlt className="text-green-600 mr-2" />
              <strong className="mr-1">Phone:</strong> {checkin.phone}
            </p>

            <p className="text-gray-700 mb-2 flex items-center">
              <FaTools className="text-yellow-500 mr-2" />
              <strong className="mr-1">Service Type:</strong> {checkin.serviceType}
            </p>

            <div className="mb-4">
              <p className="flex items-center text-gray-800 font-semibold mb-1">
                <FaMapMarkedAlt className="text-red-500 mr-2" /> Address:
              </p>
              <p className="text-gray-700 ml-6">{checkin.address?.street}</p>
              <p className="text-gray-700 ml-6">
                {checkin.address?.city}, {checkin.address?.state} {checkin.address?.zip}
              </p>
            </div>

            <div className="mb-4">
              <p className="flex items-center text-gray-800 font-semibold mb-1">
                <FaStickyNote className="text-indigo-500 mr-2" /> Notes:
              </p>
              <p className="text-gray-700 ml-6">{checkin.notes || 'No additional notes'}</p>
            </div>

            <p className="text-gray-500 text-sm flex items-center">
              <FaCalendarAlt className="text-blue-400 mr-2" />
              Check-in Date: {new Date(checkin.checkInDate).toLocaleDateString()}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CheckInListPage;
