import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import SideBar from "../../components/SideBar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="w-full bg-white px-4 md:px-36 py-4 flex justify-between items-center shadow">
        <div className="flex items-center space-x-2">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo.png?v=1694685223&width=160"
            alt="FurStore Logo"
            className="w-24 md:w-auto"
          />
        </div>

        <nav className="hidden md:flex space-x-4 md:space-x-16">
          <Link to="/" className="font-bold text-[#0a5d5d]">
            HOME
          </Link>
          <Link to="/collection" className="text-gray-800">
            COLLECTION
          </Link>
          <Link to="/products" className="text-gray-800 ">
            PRODUCTS
          </Link>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Search Icon */}
          <FaSearch className="text-gray-800 text-lg md:text-xl cursor-pointer" />

          {/* User Icon */}
          <FaUser className="text-gray-800 text-lg md:text-xl cursor-pointer" />

          {/* Shopping Cart Icon with notification badge */}
          <div className="relative">
            <FaShoppingCart className="text-gray-800 text-lg md:text-xl cursor-pointer" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </div>

          {/* Hamburger Menu */}
          <GiHamburgerMenu
            className="text-lg md:text-xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </header>

      {/* Sidebar */}
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
