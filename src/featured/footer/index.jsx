import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div className="space-y-4">
            <img
              src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo.png?v=1694685223"
              alt="FurStore Logo"
              className="w-[200px]"
            />
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-500" />
              <p className="text-lg text-gray-600">2357 Gordon Street, CA</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-gray-500" />
              <p className="text-lg text-gray-600">0123 456 789</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-500" />
              <p className="text-lg text-gray-600">demo@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 text-xl mt-2">
              About us
            </h4>
            <ul className="space-y-2 mt-8">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-teal-600 text-lg"
                >
                  Our story
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-teal-600 text-lg"
                >
                  Our team
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-teal-600 text-lg"
                >
                  Designers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mt-2">
              Customer service
            </h4>
            <ul className="space-y-2 mt-8">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-teal-600 text-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-teal-600 text-lg"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-teal-600 text-lg"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mt-2">Support</h4>
            <ul className="space-y-2 mt-8">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-teal-600 text-lg"
                >
                  FAQ's
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-teal-600 text-lg"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-teal-600 text-lg"
                >
                  Return
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mt-2">Payments</h4>
            <div className="flex space-x-4 mt-2">
              <img
                src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-2-7_250x.png?v=1696490455"
                alt="Payment Methods"
              />
            </div>

            <h4 className="font-semibold text-gray-800 mt-6">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <FaFacebookF className="text-gray-500 hover:text-teal-600 cursor-pointer" />
              <FaPinterestP className="text-gray-500 hover:text-teal-600 cursor-pointer" />
              <FaInstagram className="text-gray-500 hover:text-teal-600 cursor-pointer" />
              <FaTwitter className="text-gray-500 hover:text-teal-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        Copyright © 2023 Vinovathemes. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
