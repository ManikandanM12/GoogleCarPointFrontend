import React from 'react';
import { motion } from 'framer-motion';
import {
  Hammer,
  Wrench,
  ShieldCheck,
  AlertTriangle,
  Layers3,
  Paintbrush,
  Brush,
  Sparkles,
  PanelTop,
  Ruler,
  Construction,
} from 'lucide-react';

const tinkeringServices = [
  {
    title: 'Minor Dent Removal',
    icon: <Hammer size={28} className="text-red-500" />,
    description: 'Remove small dents and dings from the car body without repainting.',
  },
  {
    title: 'Panel Beating',
    icon: <PanelTop size={28} className="text-blue-600" />,
    description: 'Reshape damaged car panels to restore original form.',
  },
  {
    title: 'Rust Treatment',
    icon: <ShieldCheck size={28} className="text-green-600" />,
    description: 'Prevent and remove rust with specialized chemical treatments.',
  },
  {
    title: 'Structural Welding',
    icon: <Construction size={28} className="text-orange-600" />,
    description: 'Strengthen and restore damaged body structures with expert welding.',
  },
  {
    title: 'Crack & Hole Filling',
    icon: <Wrench size={28} className="text-purple-600" />,
    description: 'Fill body cracks and gaps to prepare surfaces for painting.',
  },
  {
    title: 'Surface Levelling',
    icon: <Ruler size={28} className="text-teal-600" />,
    description: 'Level and smooth car panels for a flawless finish.',
  },
  {
    title: 'Scratch Repair',
    icon: <Brush size={28} className="text-pink-600" />,
    description: 'Fix paint scratches and restore a clean appearance.',
  },
  {
    title: 'Custom Fabrication',
    icon: <Layers3 size={28} className="text-yellow-600" />,
    description: 'Fabricate parts and panels for vintage or custom vehicles.',
  },
  {
    title: 'Visual Inspection',
    icon: <AlertTriangle size={28} className="text-gray-600" />,
    description: 'Thorough check to find hidden body damage or alignment issues.',
  },
];

const TinkeringServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-red-700 mb-10 text-center"
        >
          Tinkering Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tinkeringServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-100 mb-4">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
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
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-full shadow hover:bg-red-700 transition"
          >
            Book Tinkering Service Now
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default TinkeringServicesPage;
