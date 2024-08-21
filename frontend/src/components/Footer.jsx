import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-teal-50 text-gray-800">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Brand Section */}
          <div className="mb-8 md:mb-0">
            <a href="https://flowbite.com" className="flex items-center">
              <Link to="/" className="text-2xl font-semibold text-teal-600 hover:text-teal-800 transition duration-300">UniHub</Link>
            </a>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-teal-600">About</h3>
              <ul>
                <li><a href="#" className="hover:text-teal-800 transition duration-300">UniHub</a></li>
                <li><a href="#" className="hover:text-teal-800 transition duration-300">Tailwind CSS</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-teal-600">Follow Us</h3>
              <ul>
                <li><a href="#" className="hover:text-teal-800 transition duration-300">Github</a></li>
                <li><a href="#" className="hover:text-teal-800 transition duration-300">Discord</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-teal-600">Legal</h3>
              <ul>
                <li><a href="#" className="hover:text-teal-800 transition duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-teal-800 transition duration-300">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-teal-200" />

        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">© 2024 UniHub™. All rights reserved.</p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <a href="#" className="text-gray-600 hover:text-teal-600 transition duration-300 transform hover:scale-110"><BsFacebook size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition duration-300 transform hover:scale-110"><BsInstagram size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition duration-300 transform hover:scale-110"><BsTwitter size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition duration-300 transform hover:scale-110"><BsGithub size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition duration-300 transform hover:scale-110"><BsDribbble size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
