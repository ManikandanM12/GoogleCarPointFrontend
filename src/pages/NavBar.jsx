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
          <img src={navImg} alt="logo" className="w-20 h-10" />
        </Link>

        <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/repairs" className="nav-link">Services</Link>
          <Link to="/about-us" className="nav-link">About</Link>
          <Link to="/reviews" className="nav-link">Reviews</Link>

          {isAuthenticated && (
            <div className="relative group">
                <DropdownLink/>
             
            </div>
          )}

          {isAuthenticated ? (
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 px-4  py-2 rounded-full text-sm">
              Logout
            </button>
          ) : (
            <Link to="/login" className="bg-blue-600 hover:bg-blue-500 text-black px-3 p-5 py-1 rounded-full text-sm">
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-sm">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="mobile-link">Home</Link>
          <Link to="/repairs" onClick={() => setIsMenuOpen(false)} className="mobile-link">Services</Link>
          <Link to="/about-us" onClick={() => setIsMenuOpen(false)} className="mobile-link">About</Link>
          <Link to="/reviews" onClick={() => setIsMenuOpen(false)} className="mobile-link">Reviews</Link>

          {isAuthenticated && (
            <details className="group">
              <summary className="mobile-link cursor-pointer">More ▾</summary>
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/bills" className="mobile-sub-link" onClick={() => setIsMenuOpen(false)}>Bills</Link>
                <Link to="/checkin-list" className="mobile-sub-link" onClick={() => setIsMenuOpen(false)}>Check-in List</Link>
                <Link to="/job-order" className="mobile-sub-link" onClick={() => setIsMenuOpen(false)}>Job Orders</Link>
                <Link to="/job-orders-list" className="mobile-sub-link" onClick={() => setIsMenuOpen(false)}>Job Orders List</Link>
                <Link to="/dashboard" className="mobile-sub-link" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
              </div>
            </details>
          )}

          {isAuthenticated ? (
            <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="p-5 mobile-logout-btn">
              Logout
            </button>
          ) : (
            <Link to="/login" className="p-5 mobile-login-btn" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
          )}
        </div>
      )}

      {/* Utility classes for styling */}
      <style>{`
        .nav-link {
          display: inline-block;
          position: relative;
          font-weight: bold;
        }
        .nav-link::after {
          content: '';
          display: block;
          height: 2px;
          background: #3b82f6;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
        }
        .dropdown-link:hover {
          background-color: #e0f2fe;
        }
        .mobile-link, .mobile-sub-link {
          display: block;
          padding: 0.5rem 1rem;
          color: white;
        }
        .mobile-sub-link {
          color: #ddd;
        }
        .mobile-login-btn, .mobile-logout-btn {
          background-color: #3b82f6;
          color: black;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }
        .mobile-logout-btn {
          background-color: #ef4444;
        }
      `}</style>
    </nav>
  );
}

export default NavBar;
