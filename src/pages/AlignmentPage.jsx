import React from 'react';
import { motion } from 'framer-motion';
import {
  Gauge,
  Settings,
  AlignVerticalDistributeStart,
  Ruler,
  RotateCw,
  Zap,
} from 'lucide-react';

const alignmentServices = [
  {
    title: 'Wheel Alignment Check',
    icon: <Gauge size={28} className="text-blue-500" />,
    description: 'Check and correct wheel alignment angles for better control and tire life.',
  },
  {
    title: 'Suspension Inspection',
    icon: <Settings size={28} className="text-amber-500" />,
    description: 'Inspect shocks and struts to ensure smooth and balanced rides.',
  },
  {
    title: 'Camber & Caster Adjustment',
    icon: <AlignVerticalDistributeStart size={28} className="text-green-500" />,
    description: 'Adjust camber and caster angles for optimal handling.',
  },
  {
    title: 'Toe Alignment Correction',
    icon: <Ruler size={28} className="text-red-500" />,
    description: 'Correct toe-in and toe-out to reduce tire wear and steering issues.',
  },
  {
    title: 'Wheel Rotation',
    icon: <RotateCw size={28} className="text-purple-500" />,
    description: 'Rotate tires to ensure even tread wear and prolong tire life.',
  },
  {
    title: 'Electronic Steering Calibration',
    icon: <Zap size={28} className="text-cyan-600" />,
    description: 'Calibrate modern EPS systems after alignment for perfect control.',
  },
];

const AlignmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-700 mb-10 text-center"
        >
          Wheel Alignment Services 🛞
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alignmentServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/appointments"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
          >
            Book Alignment Service
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AlignmentPage;
