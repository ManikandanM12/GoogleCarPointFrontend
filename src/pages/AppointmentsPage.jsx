// src/components/AppointmentForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaUser, FaPhone, FaEnvelope, FaCar, FaWrench, FaCalendarAlt, FaComment } from "react-icons/fa";

const fieldIcons = {
  name: <FaUser />,
  mobile: <FaPhone />,
  email: <FaEnvelope />,
  carNumber: <FaCar />,
  service: <FaWrench />,
  date: <FaCalendarAlt />,
  message: <FaComment />,
};

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email:"",
    carNumber: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://googlecarpointproject.onrender.com/api/appointments", formData);
      alert("Appointment submitted successfully!");
      setFormData({ name: "", mobile: "",email:"", carNumber: "", service: "", date: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to submit appointment");
    }
  };

  
    return (
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-6 max-w-lg mx-auto bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-xl rounded-2xl"
      >
        <motion.h2
          className="text-2xl font-bold mb-6 text-center text-blue-700"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          Book an Appointment
        </motion.h2>
  
        {["name", "mobile", "email", "carNumber", "service", "date", "message"].map((field, index) => (
          <motion.div
            key={field}
            className="flex items-center bg-white border border-gray-300 rounded-lg p-2 mb-4 shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <div className="text-blue-600 mx-2 text-lg">{fieldIcons[field]}</div>
            <input
              type={field === "date" ? "date" : "text"}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-2 outline-none bg-transparent"
              required={field !== "message"}
            />
          </motion.div>
        ))}
  
        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white w-full px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          Submit
        </motion.button>
      </motion.form>
    );
}
export default AppointmentForm;
