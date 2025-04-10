import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const DropdownLink = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
        className="relative inline-block text-white font-bold
        after:block after:h-[4px] after:bg-blue-500
        after:scale-x-0 after:origin-left after:transition-transform
        after:duration-300 hover:after:scale-x-100"
      >
        More Options
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 w-44 bg-white border rounded-xl shadow-xl z-10"
          >
            <Link
              to="/appointments-list"
              className="block px-4 py-3 hover:bg-blue-50 text-sm text-gray-700 transition"
            >
              Appointments
            </Link>
            <Link
              to="/bills"
              className="block px-4 py-3 hover:bg-blue-50 text-sm text-gray-700 transition"
            >
             Invoices
            </Link>
            <Link
              to="/job-order"
              className="block px-4 py-3 hover:bg-blue-50 text-sm text-gray-700 transition"
            >
              Job Orders
            </Link>
            <Link
              to="/job-orders-list"
              className="block px-4 py-3 hover:bg-blue-50 text-sm text-gray-700 transition"
            >
              Job Orders List
            </Link>
            <Link
              to="/checkin-list"
              className="block px-4 py-3 hover:bg-blue-50 text-sm text-gray-700 transition"
            >
              Check In
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownLink;
