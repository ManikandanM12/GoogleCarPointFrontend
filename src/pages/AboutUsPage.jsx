import React from 'react';
import { FaWrench, FaUsers, FaCarSide, FaPhone, FaTools, FaHandshake, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-blue-700 mb-6"
        >
          Welcome to Google Car Point
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg text-center max-w-3xl mx-auto mb-10 text-gray-600"
        >
          Your trusted partner for reliable car service and repair in Chennai. We care about your vehicle like it’s our own.
        </motion.p>

        {/* About Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-100 p-6 rounded-xl shadow"
          >
            <div className="flex items-center space-x-4 mb-4">
              <FaWrench className="text-3xl text-blue-600" />
              <h2 className="text-2xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-gray-700">
              To deliver transparent, quality, and affordable car services using modern tools and expert hands.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-100 p-6 rounded-xl shadow"
          >
            <div className="flex items-center space-x-4 mb-4">
              <FaCarSide className="text-3xl text-blue-600" />
              <h2 className="text-2xl font-semibold">Our Vision</h2>
            </div>
            <p className="text-gray-700">
              To be the most trusted name in auto care by offering consistent service and care.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-100 p-5 rounded-xl shadow text-center">
            <FaHandshake className="text-blue-600 text-3xl mb-3 mx-auto" />
            <h3 className="font-semibold text-xl mb-2">Transparency</h3>
            <p>No hidden charges. We explain everything before we begin.</p>
          </div>
          <div className="bg-gray-100 p-5 rounded-xl shadow text-center">
            <FaTools className="text-blue-600 text-3xl mb-3 mx-auto" />
            <h3 className="font-semibold text-xl mb-2">Expert Mechanics</h3>
            <p>Our trained team handles all vehicle types with care and skill.</p>
          </div>
          <div className="bg-gray-100 p-5 rounded-xl shadow text-center">
            <FaAward className="text-blue-600 text-3xl mb-3 mx-auto" />
            <h3 className="font-semibold text-xl mb-2">Customer Satisfaction</h3>
            <p>Your happiness drives us. We aim to exceed expectations.</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Arun (Owner)', 'Vikram (Senior Mechanic)', 'Sathya (Electrical Expert)'].map((name, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-100 p-5 rounded-xl shadow text-center"
              >
                <img
                  src={`https://source.unsplash.com/150x150/?mechanic,person,${index}`}
                  alt={name}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">10+ Years Experience</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Need a Trustworthy Car Workshop?</h3>
          <p className="mb-6 text-gray-600">We’re here for you—book your appointment today.</p>
          <a
            href="/appointment"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition"
          >
            Book Appointment
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPage;
