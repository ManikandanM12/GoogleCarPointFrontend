import React from 'react';
import { Link } from 'react-router-dom';
import {
  Thermometer,
  Activity,
  Wrench,
  PaintRoller,
  AlignHorizontalDistributeCenter,
  Droplet
} from 'lucide-react';

const ServiceCategories = () => {
  const services = [
    {
      title: 'AC Repair',
      description: 'Cooling coil, gas refill & more',
      icon: <Thermometer size={32} className="text-blue-600" />,
      link: '/services/ac-repair'
    },
    {
      title: 'Engine Services',
      description: 'Diagnostics, oil change & filters',
      icon: <Activity size={32} className="text-red-500" />,
      link: '/services/engine-services'
    },
    {
      title: 'Tinkering',
      description: 'Dent removal, panel alignment',
      icon: <Wrench size={32} className="text-green-600" />,
      link: '/services/tinkering'
    },
    {
      title: 'Painting',
      description: 'Scratch repair, full body paint',
      icon: <PaintRoller size={32} className="text-indigo-600" />,
      link: '/services/painting'
    },
    {
      title: 'Wheel Alignment',
      description: '4-wheel alignment services',
      icon: <AlignHorizontalDistributeCenter size={32} className="text-orange-500" />,
      link: '/services/wheel-alignment'
    },
    {
      title: 'Car Wash',
      description: 'Exterior wash and interior vacuuming',
      icon: <Droplet size={32} className="text-blue-500" />,
      link: '/services/car-wash'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">Service Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-3">
                {service.icon}
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories;
