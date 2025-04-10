import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import "../App.css"; // contains animation styles
import NavBar from "./NavBar";
import { motion } from "framer-motion";

import homeImgDesktop from '../assets/img3.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import homeImgMobile from "../assets/small1.jpg";

function HomePage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  useEffect(() => {
    const token =
      localStorage.getItem("token") ||
      document.cookie.split(";").find((cookie) => cookie.includes("token"));
    setIsAuthenticated(!!token);
  }, []);

  const [bgImage, setBgImage] = useState(homeImgDesktop);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640; // Tailwind sm = 640px
      setBgImage(isMobile ? homeImgMobile : homeImgDesktop);
    };

    handleResize(); // Set on load
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
    }),
  };
 

 const services = [
  {
    title: "Car Services",
    desc: "Track vehicle service, parts used, and repair progress.",
    icon: "🔧",
    link: "/repairs",
    protected: false,
  },
  {
    title: "Appointments",
    desc: "Allow customers to book & view service schedules online.",
    icon: "📆",
    link: "/appointments",
    protected: false,
  },
  {
    title: "Check-in/Out",
    desc: "Manage vehicle in/out timings and status updates.",
    icon: "🚙",
    link: "/check-in-out",
    protected: true,
  },
  {
    title: "Finance & Billing",
    desc: "Monitor revenue, costs, and generate customer bills.",
    icon: "📊",
    link: "/billing",
    protected: true,
  },
];


  const Authenticated = !!localStorage.getItem("token");
 

  const handleClick = (item) => {
    if (item.protected && !Authenticated) {
      navigate("#");
    } else {
      navigate(item.link);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
    {/* Background Slider Animation */}
    <style>
      {`
        @keyframes slideX {
          0% { transform: translateX(0%); }
          20% { transform: translateX(-100%); }
          40% { transform: translateX(-200%); }
          60% { transform: translateX(-300%); }
          80% { transform: translateX(-400%); }
          100% { transform: translateX(0%); }
        }
      `}
    </style>

    {/* Sliding Images Container */}
    <div className="absolute inset-0  overflow-hidden">
      <div
        className="flex w-[500%] h-330 bg-cover bg-center"
        style={{
          animation: 'slideX '
        }}
      >
        {[ bgImage,img2, img3, img4, img5].map((img, index) => (
          <div
            key={index}
            className="w-full h-full bg-cover bg-center "
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
    </div>

    {/* Overlay */}
    <div className="absolute inset-0  z-0"></div>

    {/* Foreground Content */}
    <div className="relative z-20">
      <NavBar />

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
      <div className="w-full text-center px-4">
      <h2
  className="text-2xl sm:text-3xl text-amber-600 md:text-4xl lg:text-5xl font-bold uppercase mb-6 md:text-blue-500 typewriter text-center"
  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}
>
 Google Car Point
</h2>

</div>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-blue-900">
        
        </p>
        <Link
          to="/appointments"
         className="md:bg-transparent bg-gray-500 border-4 border-black text-white px-4 py-2  hover:bg-orange-400  hover:text-black md:hover:bg-blue-500 transition rounded-full backdrop-blur-md"
        >
          Book an Appointment
        </Link>
       
      </section>

      {/* Authenticated Actions */}
      {/* {isAuthenticated && (
        <section className="py-10 px-6 max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
           
          </div>
        </section>
      )} */}

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Our Core Services
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            onClick={() => handleClick(item)}
            className="cursor-pointer"
          >
            <div className="bg-white hover:bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-700">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

      <Footer />
    </div>
  </div>
);
   
}

export default HomePage;
