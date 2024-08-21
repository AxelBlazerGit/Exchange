import React from 'react';

const ContactFeedback = () => {
  return (
    <div className="w-full h-96 flex bg-teal-100 border border-double border-teal-600">
      {/* Left Section: Contact Information */}
      <div className="w-1/2 flex flex-col justify-center items-center shadow-lg text-black bg-teal-100 p-6 h-96">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg font-semibold mb-4">We would love to hear from you!</p>
        <div className="text-base">
          <p className="mb-2">
            <span className="font-bold">Our Team:</span> Pull Request </p>
          <p className="mb-2">
            <span className="font-bold">Phone:</span> +91 6291830010
          </p>
          <p className="mb-2">
            <span className="font-bold">Email:</span> pullrequest@gmail.com
          </p>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div className="w-1/2 flex justify-center items-center bg-white p-6 shadow-lg h-96">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold text-teal-600 mb-4 text-center mt-2">Send us your Feedback</h2>
          <form>
            <div className="flex justify-between mb-4">
              {/* First Name */}
              <div className="w-1/2 mr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:border-teal-400"
                  id="firstName"
                  type="text"
                  placeholder="First name"
                />
              </div>
              {/* Last Name */}
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:border-teal-400"
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:border-teal-400"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                What can we help you with?
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:border-teal-400"
                id="message"
                placeholder="What can we help you with?"
                rows="3"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-teal-100 hover:bg-teal-600 text-black font-bold p-2 mb-4 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-300 ease-in-out hover:scale-105"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFeedback;
