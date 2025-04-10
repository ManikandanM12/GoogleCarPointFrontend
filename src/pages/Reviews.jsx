import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar, FaUserAlt, FaCommentDots, FaCalendarAlt } from 'react-icons/fa';
import NavBar from './NavBar.jsx';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: '', rating: 0, comment: '' });
  const [hover, setHover] = useState(null);

  const getReviews = async () => {
    const res = await axios.get('https://googlecarpointproject.onrender.com/api/reviews');
    setReviews(res.data);
  };

  useEffect(() => {
    getReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://googlecarpointproject.onrender.com/api/reviews', form);
    setForm({ name: '', rating: 0, comment: '' });
    getReviews();
  };

  return (
     
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
     <NavBar/>
      <h2 className="text-4xl font-bold mb-4 mt-5 text-center text-blue-800">Customer Reviews</h2>
      <p className="text-center text-gray-600 mb-10">Hear what our valued customers have to say about our services.</p>

      <form onSubmit={handleSubmit} className="bg-white border p-6 rounded-lg shadow-md mb-10">
        <div className="flex items-center mb-4">
          <FaUserAlt className="text-gray-500 mr-2" />
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" required
            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>

        <div className="flex items-center mb-4">
          <span className="text-gray-500 mr-3">Rating:</span>
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  className="hidden"
                  onClick={() => setForm({ ...form, rating: ratingValue })}
                />
                <FaStar
                  size={28}
                  className="cursor-pointer transition-transform transform hover:scale-110"
                  color={ratingValue <= (hover || form.rating) ? '#ffc107' : '#e4e5e9'}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>

        <div className="mb-4">
          <div className="flex items-start mb-2">
            <FaCommentDots className="text-gray-500 mr-2 mt-1" />
            <textarea placeholder="Write your review..." className="w-full p-3 border rounded" required
              value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })}></textarea>
          </div>
        </div>

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition w-full">Submit Review</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((rev, i) => (
          <div key={i} className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg text-blue-700 flex items-center">
                <FaUserAlt className="mr-2" /> {rev.name}
              </h3>
              <p className="text-sm text-gray-400 flex items-center">
                <FaCalendarAlt className="mr-1" /> {new Date(rev.date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex mb-2">
              {[...Array(rev.rating)].map((_, idx) => (
                <FaStar key={idx} color="#ffc107" className="mr-1" />
              ))}
            </div>
            <p className="text-gray-700">{rev.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;