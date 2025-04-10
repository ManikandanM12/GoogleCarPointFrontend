import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import DropdownLink from "./DropdownLink.jsx";
import navImg from "../assets/nav.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token =
      localStorage.getItem("token") ||
      document.cookie.split(";").find((cookie) => cookie.includes("token"));
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://googlecarpointproject.onrender.com/api/auth/logout",
        {},
        { withCredentials: true }
      );
      localStorage.removeItem("token");
      localStorage.removeItem("adminToken");
      sessionStorage.removeItem("token");
      setIsAuthenticated(false);
      window.location.reload();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="m-1 bg-gray-900 rounded-xl shadow-lg text-white px-6 py-6 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-bold text-white hover:text-white">
          <img src={navImg} alt="" className="w-20 h-10" />
        </Link>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <div className="hidden md:flex space-x-6 items-center">
        <Link
                to="/"
                className="relative inline-block text-white font-bold
              after:block after:h-[4px] after:bg-blue-500
              after:scale-x-0 after:origin-left after:transition-transform
              after:duration-300 hover:after:scale-x-100"
              >
                Home
              </Link>
        <Link
                to="/repairs"
                className="relative inline-block text-white font-bold
              after:block after:h-[4px] after:bg-blue-500
              after:scale-x-0 after:origin-left after:transition-transform
              after:duration-300 hover:after:scale-x-100"
              >
                Services
              </Link>
        <Link
                to="/about-us"
                className="relative inline-block text-white font-bold
              after:block after:h-[4px] after:bg-blue-500
              after:scale-x-0 after:origin-left after:transition-transform
              after:duration-300 hover:after:scale-x-100"
              >
            About
              </Link>
        <Link
                to="/reviews"
                className="relative inline-block text-white font-bold
              after:block after:h-[4px] after:bg-blue-500
              after:scale-x-0 after:origin-left after:transition-transform
              after:duration-300 hover:after:scale-x-100"
              >
            Reviews
              </Link>
       
        
          {isAuthenticated && (
            <>
              <Link
                to="/bills"
                className="relative inline-block text-white font-bold
              after:block after:h-[4px] after:bg-blue-500
              after:scale-x-0 after:origin-left after:transition-transform
              after:duration-300 hover:after:scale-x-100"
              >
                Bills
              </Link>
              <Link
                to="/checkin-list"
                className="relative inline-block text-white font-bold
              after:block after:h-[4px] after:bg-blue-500
              after:scale-x-0 after:origin-left after:transition-transform
              after:duration-300 hover:after:scale-x-100"
              >
                Check-in List
              </Link>
              <Link
                to="/dashboard"
                className="relative inline-block text-white font-bold
              after:block after:h-[4px] after:bg-blue-500
              after:scale-x-0 after:origin-left after:transition-transform
              after:duration-300 hover:after:scale-x-100"
              >
            Dashboard
              </Link>
              <DropdownLink />
            </>
          )}

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-500 text-black px-3 py-1 rounded text-sm"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-3">
          <Link
            to="/"
            className="block hover:text-blue-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/appointments"
            className="block hover:text-blue-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Appointments
          </Link>
          <Link
            to="/repairs"
            className="block hover:text-blue-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Our services
          </Link>
          <Link
            to="/about-us"
            className="block hover:text-blue-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/reviews"
            className="block hover:text-blue-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Review
          </Link>
          {isAuthenticated && (
            <>
              <Link
                to="/bills"
                className="block hover:text-blue-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Bills
              </Link>
              <Link
                to="/checkin-list"
                className="block hover:text-blue-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Check-in List
              </Link>
              <Link
                to="/job-orders"
                className="block hover:text-blue-300"
                onClick={() => setIsMenuOpen(false)}
              >Job Orders
              </Link>
              <Link
                to="/job-orders-list"
                className="block hover:text-blue-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Job Orders List
              </Link>
              <Link
                to="/"
                className="block hover:text-blue-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Check-in List
              </Link>
              <Link
                to="/dashboard"
                className="block hover:text-blue-300"
                onClick={() => setIsMenuOpen(false)}
              >
               Dashboard
              </Link>
              
            </>
          )}

          {isAuthenticated ? (
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="block bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm mt-2"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block bg-blue-600 hover:bg-blue-500 text-black px-3 py-1 rounded text-sm mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
