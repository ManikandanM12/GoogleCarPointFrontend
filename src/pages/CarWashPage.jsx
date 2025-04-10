import React from 'react';
import { motion } from 'framer-motion';
import {
  ShowerHead,
  Sparkles,
  Droplet,
  CloudDrizzle,
  Waves,
  SprayCan,
} from 'lucide-react';

const carWashServices = [
  {
    title: 'Exterior Wash',
    icon: <ShowerHead size={28} className="text-blue-500" />,
    description: 'High-pressure water wash to clean the outer body of your vehicle.',
  },
  {
    title: 'Interior Vacuuming',
    icon: <Sparkles size={28} className="text-yellow-500" />,
    description: 'Deep cleaning of carpets, seats, and dashboards.',
  },
  {
    title: 'Underbody Wash',
    icon: <Waves size={28} className="text-teal-500" />,
    description: 'Removes dirt and grime from the underside of the car.',
  },
  {
    title: 'Foam Wash',
    icon: <CloudDrizzle size={28} className="text-purple-500" />,
    description: 'Thick foam application for a gentle yet effective clean.',
  },
  {
    title: 'Glass Cleaning',
    icon: <Droplet size={28} className="text-cyan-500" />,
    description: 'Streak-free cleaning of windshields and windows.',
  },
  {
    title: 'Perfume Spray',
    icon: <SprayCan size={28} className="text-pink-500" />,
    description: 'Pleasant air freshener spray to enhance your driving experience.',
  },
];

const CarWashPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-700 mb-10 text-center"
        >
          Car Wash Services 🚿
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carWashServices.map((service, index) => (
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
            Book Car Wash Now
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CarWashPage;
