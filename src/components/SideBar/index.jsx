import React from 'react';
import { FaFlagUsa } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Link komponentini idxal etdik

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-[250px] md:w-[350px] h-full bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="p-4 md:p-6">
        {/* Close Button */}
        <button onClick={toggleSidebar} className="text-gray-600 text-xl">
          &times;
        </button>

        {/* Menu Items */}
        <ul className="mt-12 space-y-4">
          <li>
            <Link to="/login" className="hover:text-[#0a5d5d] text-base md:text-lg mt-4">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-[#0a5d5d] text-base md:text-lg mt-4">
              Register
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className="hover:text-[#0a5d5d] text-base md:text-lg mt-4">
              Wishlist
            </Link>
          </li>
          <li>
            <Link to="/checkout" className="hover:text-[#0a5d5d] text-base md:text-lg mt-4">
              Check out
            </Link>
          </li>
        </ul>

        <hr className="my-6" />

        {/* Currency Section */}
        <div className="mt-10">
          <h4 className="text-gray-600 text-sm">CURRENCY</h4>
          <div className="flex items-center mt-2 p-2 border border-gray-300 rounded bg-gray-100">
            <FaFlagUsa className="mr-2 text-lg" />
            <select className="w-full bg-transparent focus:outline-none">
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>

        {/* Language Section */}
        <div className="mt-4">
          <h4 className="text-gray-600 text-sm">LANGUAGE</h4>
          <div className="flex items-center mt-2 p-2 border border-gray-300 rounded bg-gray-100">
            <FaGlobe className="mr-2 text-lg" />
            <select className="w-full bg-transparent focus:outline-none">
              <option>ENGLISH</option>
              <option>SPANISH</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
