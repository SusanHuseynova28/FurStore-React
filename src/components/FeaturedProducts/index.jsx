import React, { useRef, useEffect, useState } from 'react';
import useSWR from 'swr';
import { FiChevronLeft, FiChevronRight, FiShoppingCart, FiStar, FiImage } from 'react-icons/fi';

// SWR fetcher function
const fetcher = (...args) => fetch(...args).then(res => res.json());

const FeaturedProducts = () => {
  const { data, error } = useSWR('http://localhost:3001/products', fetcher);
  const [currentPage, setCurrentPage] = useState(0); // Track the current page number
  const productsPerPage = 4;

  if (error) return <div>Failed to load products.</div>;
  if (!data) return <div>Loading...</div>;

  // Handle next and previous page logic
  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(data.length / productsPerPage));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => 
      (prevPage - 1 + Math.ceil(data.length / productsPerPage)) % Math.ceil(data.length / productsPerPage)
    );
  };

  // Calculate the slice of products to show on the current page
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const visibleProducts = data.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen p-8">
      {/* Title Section with navigation icons */}
      <div className="flex items-center justify-center mb-4">
        <FiChevronLeft onClick={handlePrev} className="text-2xl cursor-pointer" />
        <h1 className="text-3xl mx-4">Featured Products</h1>
        <FiChevronRight onClick={handleNext} className="text-2xl cursor-pointer" />
      </div>
      <p className="text-center text-gray-500 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-2 p-10">
        {visibleProducts.map((product) => (
          <div key={product.id} className="relative w-full h-64 p-4">
            <div className="relative overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="h-[400px] w-full object-cover transition-transform duration-300 ease-in-out"
                onMouseEnter={(e) => (e.currentTarget.src = product.hoverImage)} // Show hover image
                onMouseLeave={(e) => (e.currentTarget.src = product.image)} // Restore original image
              />
              {/* Icons */}
              <div className="absolute bottom-2 left-0 right-0 flex items-center justify-around opacity-0 group-hover:opacity-100  bg-opacity-50 py-2 transition-opacity duration-300">
                <button className="p-2 bg-white border border-gray-300 rounded-full shadow-md">
                  <FiShoppingCart className="w-4 h-4 text-gray-700" />
                </button>
                <button className="p-2 bg-white border border-gray-300 rounded-full shadow-md">
                  <FiStar className="w-4 h-4 text-gray-700" />
                </button>
                <button className="p-2 bg-white border border-gray-300 rounded-full shadow-md">
                  <FiImage className="w-4 h-4 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className='flex gap-1 mt-4'> <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
            <p className='mt-2'>{'⭐'.repeat(product.rating)} </p>
            </div>
           
            <p className="text-gray-600 mt-2">{product.price}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
