import React from 'react';

const Categories = () => {
  return (
    <nav className="bg-teal-500 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-around">
        <div className="flex space-x-4   py-4">
          <a
            href="#"
            className="text-white hover:text-teal-900 px-4 py-2 rounded-md text-sm font-medium transform transition duration-300 hover:bg-teal-100 hover:scale-105 shadow-md"
          >
            Books
          </a>
          <a
            href="#"
            className="text-white hover:text-teal-900 px-4 py-2 rounded-md text-sm font-medium transform transition duration-300 hover:bg-teal-100 hover:scale-105 shadow-md"
          >
            Instruments
          </a>
          <a
            href="#"
            className="text-white hover:text-teal-900 px-4 py-2 rounded-md text-sm font-medium transform transition duration-300 hover:bg-teal-100 hover:scale-105 shadow-md"
          >
            Notes
          </a>
          <a
            href="#"
            className="text-white hover:text-teal-900 px-4 py-2 rounded-md text-sm font-medium transform transition duration-300 hover:bg-teal-100 hover:scale-105 shadow-md"
          >
            Other Utilites
          </a>
          
        </div>
      </div>
    </nav>
  );
};

export default Categories;
