import React, { useState } from "react";
import { motion } from "framer-motion";

const JobOrderForm = () => {
  const [formData, setFormData] = useState({
    model: "",
    jobDate: "",
    requests: [],
    checklist: [],
    fuelLevel: "",
    jackHandle: false,
    spareWheel: false,
    toolkit: false,
    estimatedCost: "",
    deliveryDate: "",
    time: "",
    customerSignature: "",
    workDone: "",
    pendingWorks: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://googlecarpointproject.onrender.com/api/job-orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Job Order Form Submitted Successfully!");
        console.log("Response:", data);
      } else {
        alert("Submission failed: " + data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Server error occurred.");
    }
  };
  

  const carModels = [
    "Maruti Swift", "Hyundai i20", "Tata Nexon", "Kia Seltos", "Honda City",
    "Toyota Innova", "Mahindra Thar", "Renault Kwid", "Hyundai Creta", "Maruti Baleno",
    "Tata Punch", "Skoda Kushaq", "Volkswagen Taigun", "MG Hector", "Mahindra Scorpio"
  ];

  const checklistOptions = [
    "Oil Service", "Brake Overhauling", "Water Service", "Wheel Alignment",
    "Suspension Overhauling", "Electrical Checkup", "AC Check", "Engine Diagnostics",
    "Tire Rotation", "Battery Check", "Headlight/Taillight Inspection",
    "Coolant Level Check", "Windshield Wiper Check"
  ];

  const handleChecklistChange = (item) => {
    setFormData(prev => ({
      ...prev,
      checklist: prev.checklist.includes(item)
        ? prev.checklist.filter(i => i !== item)
        : [...prev.checklist, item]
    }));
  };

 

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-xl mt-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
        Google CAR POINT
      </h1>
      <p className="text-sm text-center text-gray-500 mb-4">
        Multi Brand Car Service Center - All Electrical, A/C Fittings, Tinkering, Painting Works
      </p>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
          <label className="block mb-1 font-medium">Model:</label>
          <select
            className="w-full border rounded px-2 py-1"
            value={formData.model}
            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
          >
            <option value="">Select Car Model</option>
            {carModels.map((model, index) => (
              <option key={index} value={model}>{model}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Job Date:</label>
          <input
            type="date"
            className="w-full border rounded px-2 py-1"
            value={formData.jobDate}
            onChange={(e) => setFormData({ ...formData, jobDate: e.target.value })}
          />
        </div>
      </div>

      <hr className="my-4" />

      <h2 className="text-xl font-semibold mb-2">Checklist</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
        {checklistOptions.map((item, idx) => (
          <label key={idx} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.checklist.includes(item)}
              onChange={() => handleChecklistChange(item)}
            />
            {item}
          </label>
        ))}
      </div>

      <hr className="my-4" />

      <h2 className="text-xl font-semibold mb-2">Tools & Fuel</h2>
      <div className="grid grid-cols-2 text-sm gap-4">
        <div>
          <label className="block mb-1 font-medium">Fuel Level:</label>
          <input
            type="text"
            className="w-full border rounded px-2 py-1"
            value={formData.fuelLevel}
            onChange={(e) => setFormData({ ...formData, fuelLevel: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label><input type="checkbox" checked={formData.jackHandle} onChange={() => setFormData({ ...formData, jackHandle: !formData.jackHandle })}/> Jack & Handle</label>
          <label><input type="checkbox" checked={formData.spareWheel} onChange={() => setFormData({ ...formData, spareWheel: !formData.spareWheel })}/> Spare Wheel</label>
          <label><input type="checkbox" checked={formData.toolkit} onChange={() => setFormData({ ...formData, toolkit: !formData.toolkit })}/> Toolkit</label>
        </div>
      </div>

      <hr className="my-4" />

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <label className="block font-medium mb-1">Estimated Cost:</label>
          <input className="w-full border rounded px-2 py-1" type="text" value={formData.estimatedCost} onChange={(e) => setFormData({ ...formData, estimatedCost: e.target.value })} />
          <label className="block font-medium mt-2 mb-1">Delivery Date:</label>
          <input className="w-full border rounded px-2 py-1" type="date" value={formData.deliveryDate} onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })} />
          <label className="block font-medium mt-2 mb-1">Time:</label>
          <input className="w-full border rounded px-2 py-1" type="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} />
        </div>
        <div>
          <label className="block font-medium mb-1">Customer Signature:</label>
          <input className="w-full border rounded px-2 py-1" type="text" value={formData.customerSignature} onChange={(e) => setFormData({ ...formData, customerSignature: e.target.value })} />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Work Done</h2>
        <textarea className="w-full border rounded p-2" rows="4" value={formData.workDone} onChange={(e) => setFormData({ ...formData, workDone: e.target.value })}></textarea>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Pending Works</h2>
        <textarea className="w-full border rounded p-2" rows="4" value={formData.pendingWorks} onChange={(e) => setFormData({ ...formData, pendingWorks: e.target.value })}></textarea>
      </div>

      <button type="submit" className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
        Submit Job Order
      </button>
    </motion.form>
  );
};

export default JobOrderForm;
