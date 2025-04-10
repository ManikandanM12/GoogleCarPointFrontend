import React from 'react';
import { motion } from 'framer-motion';
import {
  Thermometer,
  Fan,
  Wrench,
  RefreshCcw,
  Shield,
  AlertTriangle,
  Loader2,
  Snowflake,
  Zap,
  AirVent,
  SprayCan,
  GaugeCircle,
} from 'lucide-react';

const acServices = [
  {
    title: 'AC Gas Refill & Top-up',
    icon: <Thermometer size={28} className="text-blue-500" />,
    description: 'Ensure proper cooling by refilling AC gas and checking pressure levels.',
  },
  {
    title: 'Cooling Coil Cleaning',
    icon: <Fan size={28} className="text-cyan-500" />,
    description: 'Clean coils for improved AC performance and efficiency.',
  },
  {
    title: 'AC Compressor Repair',
    icon: <Wrench size={28} className="text-red-500" />,
    description: 'Repair or replace faulty AC compressors to restore cooling function.',
  },
  {
    title: 'Complete AC Diagnostic Check',
    icon: <RefreshCcw size={28} className="text-purple-500" />,
    description: 'Full system diagnostic to identify and resolve AC-related issues.',
  },
  {
    title: 'Heater Inspection & Repair',
    icon: <Shield size={28} className="text-yellow-500" />,
    description: 'Ensure the heating system works well during cold weather.',
  },
  {
    title: 'Leak Detection & Fix',
    icon: <AlertTriangle size={28} className="text-pink-500" />,
    description: 'Detect and seal refrigerant leaks to improve system efficiency.',
  },
  {
    title: 'AC Filter Replacement',
    icon: <Fan size={28} className="text-teal-500" />,
    description: 'Replace clogged or old filters to maintain clean air flow.',
  },
  {
    title: 'Blower Motor Service',
    icon: <Loader2 size={28} className="text-orange-500" />,
    description: 'Service or replace the blower motor for consistent airflow.',
  },
  {
    title: 'Evaporator Coil Inspection',
    icon: <Snowflake size={28} className="text-sky-500" />,
    description: 'Check for frost build-up and ensure optimal evaporator function.',
  },
  {
    title: 'AC Electrical System Check',
    icon: <Zap size={28} className="text-indigo-500" />,
    description: 'Inspect wiring and electrical connections to prevent malfunction.',
  },
  {
    title: 'Cabin Vent Cleaning',
    icon: <AirVent size={28} className="text-lime-500" />,
    description: 'Clean cabin vents for improved air distribution and hygiene.',
  },
  {
    title: 'AC Disinfectant Spray',
    icon: <SprayCan size={28} className="text-fuchsia-500" />,
    description: 'Eliminate bacteria and odor with AC antibacterial treatments.',
  },
  {
    title: 'Pressure Level Monitoring',
    icon: <GaugeCircle size={28} className="text-gray-500" />,
    description: 'Monitor pressure levels to ensure AC performance and safety.',
  },
];

const ACRepairPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-700 mb-10 text-center"
        >
          AC Repair & Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {acServices.map((service, index) => (
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
            Book AC Service Now
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ACRepairPage;
