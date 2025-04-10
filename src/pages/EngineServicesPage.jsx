import React from 'react';
import { motion } from 'framer-motion';
import {
  GaugeCircle,
  Wrench,
  Droplets,
  Zap,
  Fuel,
  AlertTriangle,
  Settings,
  Shield,
  Thermometer,
  Activity,
  Fan,
  BatteryCharging,
} from 'lucide-react';

const engineServices = [
  {
    title: 'Engine Diagnostics',
    icon: <GaugeCircle size={28} className="text-blue-500" />,
    description: 'Computerized engine diagnostics for accurate problem detection.',
  },
  {
    title: 'Oil & Filter Change',
    icon: <Droplets size={28} className="text-yellow-500" />,
    description: 'Regular oil change and quality filter replacement for smooth engine performance.',
  },
  {
    title: 'Battery Check & Replacement',
    icon: <BatteryCharging size={28} className="text-green-500" />,
    description: 'Test and replace batteries to ensure reliable starts.',
  },
  {
    title: 'Spark Plug Service',
    icon: <Zap size={28} className="text-indigo-500" />,
    description: 'Check and replace spark plugs for efficient fuel combustion.',
  },
  {
    title: 'Fuel System Cleaning',
    icon: <Fuel size={28} className="text-red-500" />,
    description: 'Remove carbon buildup to improve engine fuel efficiency.',
  },
  {
    title: 'Timing Belt Replacement',
    icon: <Wrench size={28} className="text-orange-500" />,
    description: 'Prevent engine damage by replacing worn timing belts.',
  },
  {
    title: 'Engine Tune-Up',
    icon: <Settings size={28} className="text-teal-500" />,
    description: 'Full engine performance tuning and optimization.',
  },
  {
    title: 'Coolant System Check',
    icon: <Thermometer size={28} className="text-purple-500" />,
    description: 'Maintain engine temperature with proper coolant levels and flushing.',
  },
  {
    title: 'Engine Mount Inspection',
    icon: <Shield size={28} className="text-pink-500" />,
    description: 'Inspect and replace damaged engine mounts to reduce vibrations.',
  },
  {
    title: 'Noise & Vibration Diagnosis',
    icon: <Activity size={28} className="text-gray-500" />,
    description: 'Identify sources of engine noise and excessive vibration.',
  },
  {
    title: 'Cooling Fan Service',
    icon: <Fan size={28} className="text-cyan-500" />,
    description: 'Ensure cooling fans operate properly for engine heat control.',
  },
  {
    title: 'Engine Warning Light Check',
    icon: <AlertTriangle size={28} className="text-red-600" />,
    description: 'Check and reset dashboard engine warning indicators.',
  },
];

const EngineServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-yellow-700 mb-10 text-center"
        >
          Engine Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 mb-4">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">
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
            className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-full shadow hover:bg-yellow-700 transition"
          >
            Book Engine Service Now
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default EngineServicesPage;
