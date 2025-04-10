import React from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">






      <div className="max-w-6xl mx-auto px-6">
         {/* Google Map */}
 <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Our Location</h3>
          <div className="relative w-full h-64">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.899481017489!2d76.89253567377774!3d10.970959455577976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85f4c27d30d07%3A0x3053feceb43d4014!2sGoogle%20Car%20point!5e0!3m2!1sen!2sin!4v1743868042280!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Our Location"
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-7 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Phone: +91 9788642977</p>
            <p className="text-sm">Email: googlrcarpoint@carservice.com</p>
            <p className="text-sm">Address: 123 Auto St, Kalampalayam City, India</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
  <a href="#" className="text-blue-500 hover:text-blue-600">
    <FaFacebookSquare className="text-2xl" />
  </a>
  <a href="#" className="text-blue-400 hover:text-blue-600">
    <FaTwitter className="text-2xl" />
  </a>
  <a href="#" className="text-pink-500 hover:text-pink-600">
    <FaInstagram className="text-2xl" />
  </a>
  <a href="#" className="text-blue-400 hover:text-blue-600">
    <FaLinkedin className="text-2xl" />
  </a>
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="text-sm hover:text-gray-400">About Us</Link>
              </li>
              <li>
                <Link to="/repairs" className="text-sm hover:text-gray-400">Our Services</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-gray-400">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-gray-400">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

       

        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Car Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
