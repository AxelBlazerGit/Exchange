import React from 'react';

const Sell = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-8 mt-10 border-2 border-gray-200">
        <div className="flex items-center justify-start">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full mr-4">
            ←
          </button>
          <h2 className="text-3xl font-bold text-center flex-grow text-teal-500">Add New Product</h2>
        </div>
        <hr className="border-t-2 border-teal-500 mt-4 mb-6" />
        <form>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Product Name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <select
              className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 focus:shadow-outline"
              id="category"
            >
              <option>Select Category</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home & Kitchen</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 focus:shadow-outline"
              id="price"
              type="number"
              placeholder="Price"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 focus:shadow-outline"
              id="description"
              placeholder="Product Description"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photos">
              Photos
            </label>
            <input
              className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 focus:shadow-outline"
              id="photos"
              type="file"
            />
          </div>
          <div className="flex items-center justify-center mt-8">
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Upload and Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sell;
