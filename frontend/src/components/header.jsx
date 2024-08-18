import React from 'react'

const Header = () => {
  return (
    <div>
    <header className="bg-white shadow-md p-4">
      <div className=" flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/OLX_New_Logo.png/1200px-OLX_New_Logo.png"
            alt="OLX Logo"
            className="h-8"
          />
        </div>

        {/* Location Selector */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Your Location:</span>
          <select className="border border-gray-300 rounded p-1">
            <option>Select Location</option>
            <option>KGEC, Kalyani</option>
            <option>IISER, Kalyani</option>
            <option>IIIT, Kalyani</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="flex items-center flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for books, materials..."
            className="w-full border border-gray-300 rounded-l p-2"
          />
          <button className="bg-blue-500 text-white p-2 rounded-r">
            Search
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-black">Login</a>
          <a href="#" className="bg-yellow-500 text-white px-4 py-2 rounded">
            Sell
          </a>
        </div>
      </div>
    </header>


    </div>
  )
}

export default Header
