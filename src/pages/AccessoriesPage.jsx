import React from 'react';
import { motion } from 'framer-motion';
import { Music, Usb, Car, Plug, BatteryCharging } from 'lucide-react';

const accessories = [
  {
    title: 'Music System Installation',
    icon: <Music size={28} className="text-red-500" />,
    description: 'Install premium speakers, subwoofers, and music systems.'
  },
  {
    title: 'Dash Cams & Parking Sensors',
    icon: <Usb size={28} className="text-blue-500" />,
    description: 'Install dash cameras and reverse parking sensors.'
  },
  {
    title: 'Seat Covers & Mats',
    icon: <Car size={28} className="text-green-600" />,
    description: 'Customize your car’s interior with stylish seat covers and mats.'
  },
  {
    title: 'Mobile Holders & Chargers',
    icon: <Plug size={28} className="text-yellow-500" />,
    description: 'Install accessories for easy navigation and phone usage.'
  },
  {
    title: 'Battery Maintenance Kits',
    icon: <BatteryCharging size={28} className="text-purple-500" />,
    description: 'Equip your car with tools to maintain battery health.'
  },
];

export const AccessoriesPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white py-10 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-700 mb-10 text-center"
      >
        Car Accessories & Installations
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {accessories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
              {item.icon}
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default AccessoriesPage;