import React from 'react';
import 'tailwindcss/tailwind.css';
import a from '../assets/sell';
import Marquee from 'react-fast-marquee';

const SellSection = () => {
  return (
    <div>
      {/* Marquee Section */}
      <div className='w-full flex flex-row justify-center items-center'>
        <Marquee gradient={false} speed={60} pauseOnHover={true} direction="left">
          <div className='flex flex-row gap-0 w-full justify-center items-center'>
            {a.map((item, idx) => (
              <div key={idx} className='rounded-lg border border-teal-600 w-64 h-36 max-w-lg m-2 mt-5 transform transition duration-300 ease-in-out hover:scale-105 '>
                <div className="flex w-full h-full bg-white shadow-lg rounded-lg overflow-hidden">
                  {/* Image Section */}
                  <div className="w-1/3 bg-gray-300">
                    <img className="object-cover h-full w-full" src={item.pic} alt="Product" />
                  </div>
                  {/* Content Section */}
                  <div className="w-2/3 p-2">
                    <div className="flex justify-between items-center">
                      <h2 className="text-gray-900 font-bold text-xl">{item.price}</h2>
                    </div>
                    <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-gray-700 text-sm">{item.place}</span>
                      <div className="flex justify-center mt-4">
                        <button className="border hover:border-teal-500 bg-teal-500 text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-teal-500 hover:border transition duration-300 ease-in-out"> Buy Now </button>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Grid Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 content-around ml-28 my-20">
  {a.map((item, index) => (
    <div
      className="max-w-xs rounded-lg border border-teal-600 overflow-hidden shadow-lg bg-white"
      key={index}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          className="w-full h-40 object-cover"
          src={item.pic}
          alt={`Image of ${item.desc}`}
        />
      </div>

      {/* Content Section */}
      <div className="px-4 py-3">
        <div className="font-bold text-lg mb-1">{item.price}</div>
        <p className="text-gray-700 text-sm">{item.desc}</p>
      </div>

      {/* Place, Buy Now Button, and Date */}
      <div className="flex items-center justify-between px-4 pb-4">
        {/* Place */}
        <span className="w-1/4 bg-gray-200 text-center rounded-sm px-3 py-1 text-xs font-semibold text-gray-700">
          {item.place}
        </span>

        {/* Buy Now Button */}
        <button className="w-1/2 border hover:border-teal-500 bg-teal-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-teal-500 transition duration-300 ease-in-out">
          Buy Now
        </button>

        {/* Date */}
        <span className="w-1/4 bg-gray-200 text-center rounded-sm px-3 py-1 text-xs font-semibold text-gray-700">
          {item.date}
        </span>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default SellSection;
