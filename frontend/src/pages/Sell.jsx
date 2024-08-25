import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sell = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("0");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState(null);

  const navigate = useNavigate(); 

  // Handle form submission
  const handleSell = async (e) => {
    e.preventDefault();

    // Create a FormData object to send as multipart/form-data
    const formData = new FormData();
    formData.append('email', email);
    formData.append('title', name); // 'title' corresponds to the backend's field
    formData.append('category', category);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('image', photos); // 'image' corresponds to the backend's field

    try {
      const res = await fetch('http://localhost:5000/sell', {
        method: 'POST',
        body: formData,  // Sending FormData, not JSON
        // No need for Content-Type, fetch will automatically set it when using FormData
      });

      if (res.ok) {
        console.log('Response:', await res.json());
        setTimeout(() => {
          navigate("/"); // Redirect to home page
        }, 1000);
      } else {
        console.error('Failed to upload:', res.statusText);
      }
    } catch (err) {
      console.error('Error:', err);
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
        <form onSubmit={handleSell}>
          {/* Form fields remain the same */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <select
              className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 focus:shadow-outline"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Select Category</option>
              <option>Books</option>
              <option>Instruments</option>
              <option>Utilities</option>
              <option>Notes</option>
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              onChange={(e) => setPhotos(e.target.files[0])}
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
