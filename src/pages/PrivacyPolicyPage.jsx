import React from "react";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
      <motion.h1
        initial="hidden"
        animate="visible"
        custom={0}
        variants={sectionVariant}
        className="text-3xl font-bold mb-6 text-center text-gray-800"
      >
        Privacy Policy
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        custom={0.1}
        variants={sectionVariant}
        className="mb-6 text-sm text-gray-500 text-center"
      >
        Effective Date: April 7, 2025
      </motion.p>

      {[
        {
          title: "1. Information We Collect",
          content:
            "We collect personal info like name, phone number, vehicle details, appointment data, and usage analytics.",
        },
        {
          title: "2. How We Use Your Information",
          content:
            "To manage bookings, send updates, generate invoices, maintain service history, and improve UX.",
        },
        {
          title: "3. Data Sharing and Disclosure",
          content:
            "We don’t sell your data. We only share it with employees for service purposes or legal obligations.",
        },
        {
          title: "4. Data Security",
          content:
            "We use reasonable security practices to protect your data against unauthorized access or loss.",
        },
        {
          title: "5. Cookies and Tracking",
          content:
            "We use cookies for a smoother experience. You can control this via browser settings.",
        },
        {
          title: "6. Your Rights",
          content:
            "You can view, update, or request deletion of your data. Email us at YourSupportEmail@example.com.",
        },
        {
          title: "7. Changes to This Policy",
          content:
            "We may update this Privacy Policy. Check back here for updates. Continued use = acceptance.",
        },
        {
          title: "8. Contact Us",
          content:
            "Email: YourSupportEmail@example.com | Phone: YourWorkshopPhone | Address: Your Workshop Address",
        },
      ].map((section, index) => (
        <motion.div
          key={index}
          custom={index + 0.3}
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          className="mb-6"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            {section.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">{section.content}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
