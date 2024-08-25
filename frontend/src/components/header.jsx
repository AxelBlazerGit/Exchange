import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for user data in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <header className="bg-white shadow-md p-4">
        <div className="flex items-center justify-center space-x-4 mt-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-4xl text-teal-500 font-bold">UniHub</Link>
            </div>
          </div>

          {/* Location Dropdown */}
          <div className="flex items-center space-x-2">
            <span className="text-slate-700 font-semibold">Your Location:</span>
            <select className="border border-teal-500 hover:border-teal-700 rounded p-2 font-semibold outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out">
              <option>Select Location</option>
              <option>KGEC, Kalyani</option>
              <option>IISER, Kalyani</option>
              <option>IIIT, Kalyani</option>
            </select>
          </div>

          {/* Search Bar */}
          <div className="flex items-center flex-1">
            <input
              type="text"
              placeholder="Search for books, instruments..."
              className="w-full border border-teal-500 hover:border-teal-700 rounded-l p-2 font-semibold outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
            />
            <button className="bg-teal-500 text-white p-2 rounded-r hover:bg-teal-600 transition duration-300 ease-in-out">
              Search
            </button>
          </div>

          {/* Right Section: Navigation Links */}
          <div className="flex items-center space-x-4 ml-auto">
            {user ? (
              // Show "Hi, user.name" when logged in
              <div className="text-slate-700 font-semibold">
                Hi, {user.name}
              </div>
            ) : (
              // Show "Login" button when not logged in
              <Link
                className="text-slate-700 hover:text-teal-600 font-semibold hover:underline transition duration-300 ease-in-out"
                to="/login"
              >
                Login
              </Link>
            )}

            {/* Sell Button */}
            <Link
              className="bg-slate-700 text-white px-6 py-2 rounded-full border-2 border-slate-500 hover:bg-teal-600 hover:border-teal-600 transition duration-300 ease-in-out"
              to="/sell"
            >
              Sell
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
