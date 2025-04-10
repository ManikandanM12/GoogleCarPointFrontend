import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const serviceList = {
    Repairs: [
      'AC Repair',
      'AC Gas Refill',
      'AC Compressor Replacement',
      'AC Condenser Cleaning',
      'Engine Tuning',
      'Engine Oil Change',
      'Full Engine Overhaul',
      'Timing Belt Replacement',
      'Brake Pad Replacement',
      'Brake Disc Repair',
      'Clutch Replacement',
      'Suspension Work',
      'Battery Replacement',
      'Alternator Repair',
      'Starter Motor Repair',
      'Radiator Service',
      'Water Pump Replacement',
      'Fuel Injector Cleaning',
      'Oil Filter Change',
      'Air Filter Replacement',
      'Spark Plug Replacement',
      'Headlight Repair',
      'Tail Light Replacement',
      'Horn Repair',
      'Tinkering',
      'Bumper Repair',
      'Body Dent Removal',
      'Painting',
      'Scratch Removal',
      'Windshield Replacement',
      'Window Motor Repair',
      'Power Steering Repair',
      'Gearbox Overhaul',
      'Sensor Diagnostics',
      'ECU Tuning',
      'Electrical Wiring Fix',
      'Dashboard Repair',
      'Mirror Replacement',
      'Seat Belt Fixing',
      'Door Lock Mechanism Repair',
      'Sunroof Repair',
      'Fuse Replacement',
      'Exhaust System Repair',
      'Catalytic Converter Cleaning',
    ],
  
    Washing: [
      'Interior Cleaning',
      'Full Interior Detailing',
      'Exterior Wash',
      'Foam Wash',
      'Underbody Wash',
      'Wax Polish',
      'Ceramic Coating',
      'Glass Polishing',
      'Tyre Dressing',
      'Dashboard Polishing',
      'Seat Shampooing',
      'Roof Cleaning',
      'Engine Bay Cleaning',
      'Mat Washing',
      'Mud Flap Cleaning',
      'Silencer Coating',
      'Rain Guard Polishing',
      'Plastic Part Conditioning',
      'Alloy Wheel Cleaning',
    ],
  
    Alignment: [
      'Wheel Alignment',
      'Wheel Balancing',
      'Tyre Rotation',
      'Tyre Pressure Check',
      'Camber Adjustment',
      'Toe-In/Toe-Out Correction',
      'Steering Column Adjustment',
      'Suspension Alignment',
      'Steering Wheel Calibration',
    ],
  
    Electrical: [
      'Battery Check',
      'Headlight Upgrade',
      'Fog Light Installation',
      'Wiring Inspection',
      'Power Window Fix',
      'Central Locking Setup',
      'Bluetooth Stereo Setup',
      'Speaker Installation',
      'Reverse Camera Installation',
      'Parking Sensor Installation',
    ],
  
    GeneralService: [
      'Periodic Service',
      'Pre-Delivery Inspection',
      'Roadside Assistance',
      'Pickup & Drop',
      'Vehicle Scanning',
      'Tyre Change',
      'Number Plate Fix',
      'Vehicle Health Report',
      'Insurance Renewal Assistance',
      'RTO Paperwork Help',
    ],
  };

const Billing = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [rate, setRate] = useState('');
  const [billItems, setBillItems] = useState([]);
  const [carNumber, setCarNumber] = useState('');
  const [labourDesc, setLabourDesc] = useState('');
  const [labourRate, setLabourRate] = useState('');
  const [labourItems, setLabourItems] = useState([]);
  const [phone,setPhone] = useState('');
  const [customer,setCustomer]= useState('');  

  const handleAddItem = () => {
    if (!selectedCategory || !selectedService || !rate || quantity <= 0) return;

    const newItem = {
      category: selectedCategory,
      service: selectedService,
      quantity: Number(quantity),
      rate: Number(rate),
      amount: Number(rate) * Number(quantity),
    };

    setBillItems([...billItems, newItem]);
    setSelectedCategory('');
    setSelectedService('');
    setQuantity(1);
    setRate('');
  };

  const handleAddLabour = () => {
    if (!labourDesc || !labourRate) return;
    const newLabour = {
      desc: labourDesc,
      amount: Number(labourRate),
    };
    setLabourItems([...labourItems, newLabour]);
    setLabourDesc('');
    setLabourRate('');
  };

  const handlePrint = () => {
    window.print();
  };

  const totalServiceAmount = billItems.reduce((sum, item) => sum + item.amount, 0);
  const totalLabourAmount = labourItems.reduce((sum, item) => sum + item.amount, 0);
  const grandTotal = totalServiceAmount + totalLabourAmount;

  const handleSaveToDatabase = async () => {
    try {
      const payload = {
        billItems,
        labourItems,
        grandTotal,
        createdAt: new Date(),
      };
  
      const response = await axios.post('https://googlecarpointproject.onrender.com/api/billing',{
        billItems,
        labourItems,
        carNumber:carNumber.toUpperCase(),
        totalAmount: grandTotal,
        customer:customer,
        phone:phone,
      
      });
  
      if (response.data.success) {
        alert('Billing details saved successfully!');
        console.log(response)
      } else {
        alert('Failed to save billing.');
      }
    } catch (error) {
      console.error('Save Error:', error);
      alert('An error occurred while saving.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <style>
        {`
          @media print {
            .no-print {
              display: none !important;
            }
          }
        `}
      </style>

      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-blue-800">Google Car Point</h1>
        <p className="text-lg text-gray-600 font-semibold tracking-wide">MULTI BRAND CAR SERVICE</p>
        <p className="text-gray-600">Perur, Kalampalayam, Coimbatore - 601010</p>
        <div className="mt-2 text-sm text-gray-700 font-semibold flex justify-center items-center gap-2">
  <span>TO:</span>
  <input
  type="text"
  value={carNumber}
  onChange={(e) => setCarNumber(e.target.value.toUpperCase())}
  placeholder="Enter Car Number"
  className="border border-gray-600 bg-transparent focus:outline-none p-1 text-black text-center"
/>
  <span>Customer Name:</span>
  <input
  type="text"
  value={customer}
  onChange={(e) => setCustomer(e.target.value)}
  placeholder="Eneter Customer Name"
  className="border border-gray-600 bg-transparent focus:outline-none p-1 text-black text-center"
/>
  <span>TO:</span>
  <input
  type="number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  placeholder="Enter Phone Number"
  className="border border-gray-600 bg-transparent focus:outline-none p-1 text-black text-center"
/>
</div>
      </motion.div>

      <motion.div 
        className="no-print bg-white shadow rounded-lg p-6 max-w-4xl mx-auto space-y-4"
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.4 }}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block font-semibold">Service Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedService('');
              }}
              className="w-full p-2 border rounded shadow-sm focus:ring focus:ring-blue-200"
            >
              <option value="">Select Category</option>
              {Object.keys(serviceList).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block font-semibold">Service</label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-2 border rounded shadow-sm focus:ring focus:ring-blue-200"
              disabled={!selectedCategory}
            >
              <option value="">Select Service</option>
              {selectedCategory &&
                serviceList[selectedCategory].map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
            </select>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold">Quantity</label>
            <input
              type="number"
              value={quantity}
              min={1}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Rate (₹)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={handleAddItem}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Add Item
            </button>
          </div>
        </div>

        <hr className="my-4" />

        <h3 className="font-bold text-lg">Labour Charges</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold">Description</label>
            <input
              type="text"
              value={labourDesc}
              onChange={(e) => setLabourDesc(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Amount (₹)</label>
            <input
              type="number"
              value={labourRate}
              onChange={(e) => setLabourRate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={handleAddLabour}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Add Labour
            </button>
          </div>
        </div>
      </motion.div>

      {/* Item Table */}
      <div className="mt-6 max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
        {billItems.length > 0 && (
          <div>
            <h3 className="font-bold text-lg mb-4">Service Items</h3>
            <table className="w-full text-left border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2">Category</th>
                  <th className="border px-4 py-2">Service</th>
                  <th className="border px-4 py-2">Qty</th>
                  <th className="border px-4 py-2">Rate (₹)</th>
                  <th className="border px-4 py-2">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                {billItems.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{item.category}</td>
                    <td className="border px-4 py-2">{item.service}</td>
                    <td className="border px-4 py-2">{item.quantity}</td>
                    <td className="border px-4 py-2">{item.rate}</td>
                    <td className="border px-4 py-2">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {labourItems.length > 0 && (
          <div className="mt-6">
            <h3 className="font-bold text-lg mb-4">Labour Charges</h3>
            <table className="w-full text-left border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2">Description</th>
                  <th className="border px-4 py-2">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                {labourItems.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{item.desc}</td>
                    <td className="border px-4 py-2">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-6 text-right font-bold text-lg">
          Grand Total: ₹{grandTotal}
        </div>

        <div className="no-print mt-6 text-right">
          <button
            onClick={handlePrint}
            className="bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700"
          >
            Print Bill
          </button>
          <button
  onClick={handleSaveToDatabase}
  className="ml-4 bg-green-700 text-white py-2 px-6 rounded hover:bg-green-800"
>
  Save
</button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
