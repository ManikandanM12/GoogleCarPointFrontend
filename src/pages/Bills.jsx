import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Car, Search, Calendar, Phone, User, DollarSign, StickyNote,
  BarChart2, Clock, CalendarDays, CalendarCheck, FileDown
} from 'lucide-react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const groupBillsByMonth = (bills) => {
  const grouped = {};
  bills.forEach((bill) => {
    const date = new Date(bill.createdAt);
    const monthKey = date.toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    });
    if (!grouped[monthKey]) grouped[monthKey] = [];
    grouped[monthKey].push(bill);
  });
  return grouped;
};

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBills, setFilteredBills] = useState([]);
  const [stats, setStats] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token, redirecting...');
      navigate('/login');
    } else {
      fetchBills(token);
      fetchStats(token);
    }
  }, []);

  const fetchBills = async (token) => {
    try {
      const res = await axios.get('https://googlecarpointproject.onrender.com/api/billing', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBills(res.data);
      setFilteredBills(res.data);
    } catch (err) {
      console.error('Fetch bills error:', err);
    }
  };

  const fetchStats = async (token) => {
    try {
      const res = await axios.get('https://googlecarpointproject.onrender.com/api/billing/stats', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStats(res.data);
    } catch (err) {
      console.error('Fetch stats error:', err);
    }
  };

  const handleSearch = async () => {
    const token = localStorage.getItem('token');
    if (searchTerm.trim()) {
      try {
        const res = await axios.get(
          `https://googlecarpointproject.onrender.com/api/billing/search/${searchTerm}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setFilteredBills(res.data);
      } catch (err) {
        console.error('Search error:', err);
      }
    } else {
      setFilteredBills(bills);
    }
  };

  const exportToExcel = () => {
    const dataToExport = filteredBills.map((bill) => ({
      'Car Number': bill.carNumber,
      'Customer Name': bill.customerName || 'N/A',
      'Phone': bill.phone || 'N/A',
      'Service Type': bill.serviceType || 'N/A',
      'Total Amount': bill.totalAmount,
      'Created At': new Date(bill.createdAt).toLocaleString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Bills');

    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    const fileData = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(fileData, 'Google-CarPoint-Bills.xlsx');
  };

  const grouped = groupBillsByMonth(filteredBills);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="p-6 max-w-7xl mx-auto bg-white text-gray-900 rounded-xl border border-blue-100 transition-colors duration-300">

        <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-700 drop-shadow">
          Monthly Bill History
        </h1>

        <div className="flex justify-end mb-4">
          <button
            onClick={exportToExcel}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            <FileDown size={18} /> Download Excel
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
          <input
            type="text"
            placeholder="🔍 Enter Car Number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border-2 border-blue-400 rounded-lg w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button
            onClick={handleSearch}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform"
          >
            <Search size={18} /> Search
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-blue-100 p-4 rounded-lg flex items-center gap-3">
            <Clock className="text-blue-600" />
            <div>
              <p className="text-gray-600 text-sm">Daily Total</p>
              <p className="text-xl font-bold text-blue-700">₹{stats.dailyTotal || 0}</p>
            </div>
          </div>
          <div className="bg-green-100 p-4 rounded-lg flex items-center gap-3">
            <CalendarCheck className="text-green-600" />
            <div>
              <p className="text-gray-600 text-sm">Monthly Total</p>
              <p className="text-xl font-bold text-green-700">₹{stats.monthlyTotal || 0}</p>
            </div>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg flex items-center gap-3">
            <CalendarDays className="text-yellow-600" />
            <div>
              <p className="text-gray-600 text-sm">Yearly Total</p>
              <p className="text-xl font-bold text-yellow-700">₹{stats.yearlyTotal || 0}</p>
            </div>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg flex items-center gap-3">
            <BarChart2 className="text-purple-600" />
            <div>
              <p className="text-gray-600 text-sm">Car Frequencies</p>
              <ul className="text-sm mt-1">
                {stats.carFrequency &&
                  Object.entries(stats.carFrequency).map(([car, count]) => (
                    <li key={car} className="text-purple-800">
                      {car}: <span className="font-bold">{count}</span> time(s)
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        {Object.keys(grouped).map((month) => (
          <div key={month} className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 border-l-4 border-indigo-500 pl-4 mb-4">
              {month}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {grouped[month].map((bill, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl border border-blue-100 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="text-blue-600 text-lg font-semibold flex items-center gap-2 mb-3">
                    <Car size={20} />
                    {bill.carNumber}
                  </div>
                  <div className="text-gray-800 space-y-2">
                    <div className="flex items-center gap-2">
                      <User size={18} className="text-blue-500" />
                      <span className="font-medium">Customer:</span> {bill.customerName}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={18} className="text-green-500" />
                      <span className="font-medium">Phone:</span> {bill.phone}
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign size={18} className="text-yellow-500" />
                      <span className="font-medium">Amount:</span> ₹{bill.totalAmount}
                    </div>
                    <div className="flex items-center gap-2">
                      <StickyNote size={18} className="text-purple-500" />
                      <span className="font-medium">Service:</span> {bill.serviceType}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-pink-500" />
                      <span className="font-medium">Date:</span>{' '}
                      {new Date(bill.createdAt).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bills;
