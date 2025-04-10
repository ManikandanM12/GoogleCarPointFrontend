import React, { useEffect, useState } from "react";
import { Trash2, Calendar, Fuel, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const JobOrdersList = () => {
  const [jobOrders, setJobOrders] = useState([]);

  useEffect(() => {
    fetch("https://googlecarpointproject.onrender.com/api/job-orders")
      .then((res) => res.json())
      .then((data) => setJobOrders(data))
      .catch((err) => console.error("Error fetching job orders:", err));
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;

    try {
      const res = await fetch(`https://googlecarpointproject.onrender.com/api/job-orders/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setJobOrders(jobOrders.filter((order) => order._id !== id));
      }
    } catch (error) {
      console.error("Error deleting job order:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl p-3 bg-gray-800 font-bold mb-6 text-center text-white">
      Job Orders
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobOrders.map((order, idx) => (
          <motion.div
            key={order._id}
            className="p-5 border border-gray-300 bg-white rounded-2xl shadow-lg relative hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <h2 className="font-bold text-xl text-blue-700 mb-2 flex items-center gap-2">
              <Wrench className="text-blue-500" size={20} />
              {order.model}
            </h2>
            <p className="mb-1"><Calendar className="inline mr-2 text-indigo-500" size={18} /><strong>Job Date:</strong> {order.jobDate}</p>
            <p className="mb-1"><strong>Checklist:</strong> {order.checklist.join(", ")}</p>
            <p className="mb-1"><Fuel className="inline mr-2 text-green-500" size={18} /><strong>Fuel:</strong> {order.fuelLevel}</p>
            <p className="mb-1"><strong>Estimated Cost:</strong> ₹{order.estimatedCost}</p>
            <p className="mb-1"><strong>Delivery Date:</strong> {order.deliveryDate}</p>
            <p className="mb-1"><strong>Time:</strong> {order.time}</p>
            <p className="mb-1"><strong>Tools:</strong>
              {order.jackHandle && " Jack & Handle,"}
              {order.spareWheel && " Spare Wheel,"}
              {order.toolkit && " Toolkit"}
            </p>
            <p className="mb-1"><strong>Work Done:</strong> {order.workDone}</p>
            <p className="mb-1"><strong>Pending:</strong> {order.pendingWorks}</p>

            <button
              onClick={() => handleDelete(order._id)}
              className="absolute top-3 right-3 bg-red-100 text-red-600 hover:bg-red-200 p-2 rounded-full transition"
              title="Delete"
            >
              <Trash2 size={18} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JobOrdersList;
