import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import {
  UserIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
  CalendarDaysIcon,
  MapPinIcon,
  ClipboardDocumentListIcon,
  IdentificationIcon,
  CheckCircleIcon
} from '@heroicons/react/24/solid';

const CheckInPage = () => {
  const [formData, setFormData] = useState({
    carNumber: '',
    customerName: '',
    phone: '',
    serviceType: '',
    notes: '',
    checkInDate: '',
    address: { street: '', city: '', state: '', zip: '' },
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name in formData.address) {
      setFormData({
        ...formData,
        address: { ...formData.address, [e.target.name]: e.target.value },
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleCheckIn = async (e) => {
    e.preventDefault();
    if (!formData.carNumber || !formData.customerName || !formData.serviceType || !formData.checkInDate) {
      setMessage('Please fill in all required fields.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('https://googlecarpointproject.onrender.com/api/checkin', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 201) {
        setMessage('Check-in successful!');
        setFormData({
          carNumber: '',
          customerName: '',
          phone: '',
          serviceType: '',
          notes: '',
          checkInDate: '',
          address: { street: '', city: '', state: '', zip: '' },
        });
      }
    } catch (err) {
      setMessage('Check-in failed. Please try again.');
      console.error(err);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-tr from-white via-blue-50 to-blue-100 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-2xl border-t-4 border-blue-600"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 70, damping: 12 }}
      >
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8 flex items-center justify-center gap-2">
          <motion.span whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <WrenchScrewdriverIcon className="w-9 h-9 text-blue-600" />
          </motion.span>
          Car Service Check-In
        </h2>

        {message && (
          <motion.p
            className="text-center mb-6 font-semibold text-green-600 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.4 }}
          >
            <CheckCircleIcon className="w-6 h-6 mr-2 text-green-500" />
            {message}
          </motion.p>
        )}

        <form onSubmit={handleCheckIn} className="grid gap-5">
          {[
            { icon: IdentificationIcon, name: 'carNumber', placeholder: 'Car Number *', required: true },
            { icon: UserIcon, name: 'customerName', placeholder: 'Customer Name *', required: true },
            { icon: PhoneIcon, name: 'phone', placeholder: 'Phone Number' },
          ].map((field, i) => (
            <motion.div
              key={field.name}
              className="flex items-center border border-blue-200 rounded-xl px-4 py-3 bg-white hover:shadow-md focus-within:ring-2 focus-within:ring-blue-400"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <field.icon className="w-6 h-6 text-blue-500 mr-3" />
              <input
                type={field.name === 'phone' ? 'tel' : 'text'}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                className="w-full bg-transparent focus:outline-none"
              />
            </motion.div>
          ))}

          <motion.div
            className="flex items-center border border-blue-200 rounded-xl px-4 py-3 bg-white hover:shadow-md"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <WrenchScrewdriverIcon className="w-6 h-6 text-blue-500 mr-3" />
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full bg-transparent focus:outline-none"
            >
              <option value="">Select Service Type</option>
              <option>Oil Change</option>
              <option>Full Service</option>
              <option>AC Check</option>
              <option>Brake Repair</option>
              <option>Other</option>
            </select>
          </motion.div>

          <motion.div
            className="flex items-center border border-blue-200 rounded-xl px-4 py-3 bg-white hover:shadow-md"
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <CalendarDaysIcon className="w-6 h-6 text-blue-500 mr-3" />
            <input
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              required
              className="w-full bg-transparent focus:outline-none"
            />
          </motion.div>

          <motion.div
            className="flex items-center border border-blue-200 rounded-xl px-4 py-3 bg-white hover:shadow-md"
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <MapPinIcon className="w-6 h-6 text-blue-500 mr-3" />
            <input
              type="text"
              name="street"
              placeholder="Street Address *"
              value={formData.address.street}
              onChange={handleChange}
              required
              className="w-full bg-transparent focus:outline-none"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {['city', 'state'].map((key, i) => (
              <motion.input
                key={key}
                type="text"
                name={key}
                placeholder={`${key[0].toUpperCase() + key.slice(1)} *`}
                value={formData.address[key]}
                onChange={handleChange}
                required
                className="p-3 rounded-xl border border-blue-200 bg-white focus:outline-blue-400"
                custom={i + 6}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              />
            ))}
            <motion.input
              type="text"
              name="zip"
              placeholder="ZIP Code *"
              value={formData.address.zip}
              onChange={handleChange}
              required
              className="col-span-2 p-3 rounded-xl border border-blue-200 bg-white focus:outline-blue-400"
              custom={8}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            />
          </div>

          <motion.div
            className="flex items-start border border-blue-200 rounded-xl px-4 py-3 bg-white hover:shadow-md"
            custom={9}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <ClipboardDocumentListIcon className="w-6 h-6 text-blue-500 mt-1 mr-3" />
            <textarea
              name="notes"
              rows="3"
              placeholder="Additional Notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none"
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: '0 0 12px #3b82f6' }}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 rounded-xl mt-2 transition duration-300"
          >
            <CheckCircleIcon className="w-5 h-5 inline mr-2" />
            Submit Check-In
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default CheckInPage;
