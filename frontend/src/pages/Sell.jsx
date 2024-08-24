import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Sell = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('category', formData.category);
    data.append('price', formData.price);
    data.append('description', formData.description);
    data.append('image', formData.image);

    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Product added successfully!');
        setFormData({
          name: '',
          category: '',
          price: '',
          description: '',
          image: null,
        });
      } else {
        alert('Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the product');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-teal-50">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-8 mt-10 border-2 border-gray-200">
        <div className="flex items-center justify-start">
          <Link to='/' className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full mr-4">
            ←
          </Link>
          <h2 className="text-3xl font-bold text-center flex-grow text-teal-500">Add New Product</h2>
        </div>
        <hr className="border-t-2 border-teal-500 mt-4 mb-6" />
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <select
              className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 focus:shadow-outline"
              id="category"
              value={formData.category}
              onChange={handleChange}
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
              value={formData.price}
              onChange={handleChange}
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
              value={formData.description}
              onChange={handleChange}
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
              onChange={handleChange}
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
